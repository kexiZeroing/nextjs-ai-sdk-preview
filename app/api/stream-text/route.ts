import { streamText } from 'ai';
import { deepseek } from '@ai-sdk/deepseek';

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const result = streamText({
    model: deepseek('deepseek-chat'),
    // model: deepseek('deepseek-reasoner'),
    system: 'You are a helpful assistant. Always anwser questions concisely.',
    prompt,
  });

  return result.toDataStreamResponse();
}