'use client';

import { useCompletion } from '@ai-sdk/react';

export default function Page() {
  const { completion, complete } = useCompletion({
    api: '/api/stream-text',
  });

  return (
    <div className="p-2 flex flex-col gap-2">
      <div
        className="p-2 bg-zinc-100 cursor-pointer rounded w-fit px-4 hover:bg-zinc-200"
        onClick={async () => {
          await complete('Why is the sky blue?');
        }}
      >
        Generate text
      </div>

      <div>{completion}</div>
    </div>
  );
}