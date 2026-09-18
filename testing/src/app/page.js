import Image from "next/image";
import Greeting from "./components/Greeting";

export const hello = (name) => {
  return `Hello, ${name}`
}

export default function Home({title}) {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Testing in Next.js</h1>
      <Greeting name={"Henry"} />
      <Image
        className="dark:invert h-20 w-50"
        src="/next.svg"
        alt="Vercel logomark"
        width={16}
        height={14}
      />
    </div>
  );
}
