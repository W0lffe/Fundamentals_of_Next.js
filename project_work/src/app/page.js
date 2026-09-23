import AppLayout from "./components/AppLayout/AppLayout";
import Title from "./components/Title/Title";
import Navigation from "./components/Navigation/Navigation";
import InfoCard from "./components/InfoCard/InfoCard";

const views = [
  { path: "/calculator", page: "Calculator", image: "/calc.jpg" },
  { path: "/editor", page: "Editor", image: "/editor.jpg" },
  { path: "/weather", page: "Weather API", image: "/weather.jpg" }
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
    info: `To enter other views, hover and click on the images above. For information, see below.`
  },
  {
    title: "Calculator",
    info: `The calculator view provides a simple calculator interface built using a few components. 
          It has its own logic function for handling mathematical operations and calculating the results. 
          It is implemented as a Client Component because it uses React hooks to manage the calculator input and results.`
  },
  {
    title: "String Editor",
    info: `The string editor provides tools for modifying and analysing user-provided text. 
            It consists of few components and includes functions for determining which actions should be performed on the given string. 
            It is implemented as a Client Component because it uses React hooks to manage the text and its related information.`
  },
  {
    title: "Weather API",
    info: `The weather view allows the user to search for weather information by entering a city name. 
          A serverless Next.js API route handles requests to a third-party weather API, fetches the weather information, and returns a one-day forecast. 
          The page also uses the React Context API to store previous searches, which the user can select to display the weather information again.
          This page is also implemented as Client Component because it uses React hooks.`
  },
  {
    title: "Styling",
    info: "All views are styled using a combination of global CSS, CSS Modules, and Tailwind CSS."
  }
]

export default function Home() {
  return (
    <AppLayout>
      <Title text={"Next.js Project Work"} />
      <Navigation pages={views} />
      <div className="md:w-1/2 p-2 flex flex-col gap-5">
        {information.map((info, i) => (
          <InfoCard info={info} key={i} />
        ))}
      </div>
    </AppLayout>
  );
}
