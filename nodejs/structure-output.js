import { generateObject } from "ai";
import { z } from "zod";
import { deepseek } from '@ai-sdk/deepseek';
import 'dotenv/config';

const schema = z.object({
  recipe: z.object({
    name: z.string().describe("The title of the recipe"),
    ingredients: z.array(
      z.object({
        name: z.string(),
        amount: z.string(),
      })
    ).describe("The ingredients needed for the recipe"),
    steps: z.array(z.string()).describe("The steps to make the recipe")
  })
});

const { object } = await generateObject({
  model: deepseek('deepseek-chat'),
  schema,
  prompt: "How to make chocolate cake?",
  schemaName: "Recipe"
});

console.log(JSON.stringify(object, null, 2));

// {
//   "recipe": {
//     "name": "Chocolate Cake",
//     "ingredients": [
//       {
//         "name": "flour",
//         "amount": "2 cups"
//       },
//       {
//         "name": "sugar",
//         "amount": "2 cups"
//       },
//       {
//         "name": "cocoa powder",
//         "amount": "3/4 cup"
//       },
//       {
//         "name": "baking powder",
//         "amount": "1 1/2 teaspoons"
//       },
//       {
//         "name": "baking soda",
//         "amount": "1 1/2 teaspoons"
//       },
//       {
//         "name": "salt",
//         "amount": "1 teaspoon"
//       },
//       {
//         "name": "eggs",
//         "amount": "2"
//       },
//       {
//         "name": "milk",
//         "amount": "1 cup"
//       },
//       {
//         "name": "vegetable oil",
//         "amount": "1/2 cup"
//       },
//       {
//         "name": "vanilla extract",
//         "amount": "2 teaspoons"
//       },
//       {
//         "name": "boiling water",
//         "amount": "1 cup"
//       }
//     ],
//     "steps": [
//       "Preheat oven to 350 degrees F (175 degrees C). Grease and flour two nine inch round pans.",
//       "In a large bowl, stir together the flour, sugar, cocoa, baking powder, baking soda and salt. Add the eggs, milk, oil and vanilla, mix for 2 minutes on medium speed of mixer. Stir in the boiling water last. Batter will be thin. Pour evenly into the prepared pans.",
//       "Bake 30 to 35 minutes in the preheated oven, until the cake tests done with a toothpick. Cool in the pans for 10 minutes, then remove to a wire rack to cool completely."
//     ]
//   }
// }