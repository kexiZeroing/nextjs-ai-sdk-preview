import Link from 'next/link';

const examples = [
  {
    title: 'Stream text',
    link: '/stream-text',
  },
  {
    title: 'Stream object',
    link: '/stream-object',
  },
  {
    title: 'Call tools',
    link: '/call-tool',
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-2 p-2">
      {examples.map((example, index) => (
        <Link key={example.link} className="flex flex-row" href={example.link}>
          <div className="w-8 text-zinc-400">{index + 1}.</div>
          <div className="hover:underline">{example.title}</div>
        </Link>
      ))}
    </main>
  );
}