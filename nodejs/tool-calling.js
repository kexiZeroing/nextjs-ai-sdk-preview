import { z } from "zod";
import { tool, generateText } from "ai";
import { deepseek } from '@ai-sdk/deepseek';
import 'dotenv/config';

const weatherTool = tool({
  description: "Get weather for a location",
  parameters: z.object({
    location: z.string().describe("City name"),
    unit: z.enum(["celsius", "fahrenheit"]).optional(),
  }),
  execute: async ({ location, unit = "celsius" }) => {
    // Implement weather lookup
    return { temperature: 22, conditions: "Sunny" };
  },
});

const result = await generateText({
  model: deepseek('deepseek-chat'),
  tools: { weather: weatherTool },
  maxSteps: 3, // Allow up to 3 steps (tool call → result → text)
  prompt: "What's the weather in Paris?",
});

console.log(result.toolResults);
