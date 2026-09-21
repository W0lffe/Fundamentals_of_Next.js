import Image from "next/image";
import AppLayout from "./components/AppLayout/AppLayout";
import Title from "./components/Title/Title";
import Navigation from "./components/Navigation/Navigation";
import InfoCard from "./components/InfoCard/InfoCard";

const views = [
  {path: "/calculator", page: "Calculator"},
  {path: "/editor", page: "Editor"},
  {path: "/weather", page: "Weather API"}
]

const information = [
  {
    title: "Course Brief", 
    info: `This course has covered fundamentals of Next.js. 
            Course has gone through the basics of routes, styling with few different methods, API routes, 
            difference in SSR and SSG, a bit of state management with Context API and testing with Jest and Playwright. 
            And finally deploying application with Vercel and Git integration.`
  },
  {
    title: "Views", 
    info: `TBA`
  }
]

export default function Home() {
  return (
    <AppLayout>
      <Image
        className="dark:invert h-20 w-50"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority 
      />
      <Title text={"Next.js Project Work"}/>
      <Navigation pages={views} />
      <div>
        {information.map((info, i) => (
          <InfoCard info={info} key={i} />
        ))}
      </div>
    </AppLayout>
  );
}
