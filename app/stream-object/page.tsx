'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';
import { z } from 'zod';

const notificationSchema = z.object({
  notifications: z.array(
    z.object({
      name: z.string().describe('Name of a fictional person.'),
      message: z.string().describe('Message. Do not use emojis or links.'),
    }),
  ),
});

export default function Page() {
  const { object, submit } = useObject({
    api: '/api/stream-object',
    schema: notificationSchema,
  });

  return (
    <div className="p-2 flex flex-col gap-2">
      <button
        className="p-2 bg-zinc-100 cursor-pointer rounded w-fit px-4 hover:bg-zinc-200"
        onClick={() => submit('Messages during finals week.')}
      >
        Generate notifications
      </button>

      {object?.notifications?.map((notification, index) => (
        <div key={index}>
          <p>{notification?.name}</p>
          <p>{notification?.message}</p>
        </div>
      ))}
    </div>
  );
}