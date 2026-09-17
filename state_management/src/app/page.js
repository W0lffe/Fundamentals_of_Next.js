import Navigation from "./components/Navigation/Navigation.jsx"
import styles from "./home/home.module.css"
import Title from "./components/Title/Title.jsx";
import Button from "./components/Button/Button.jsx";
import AppLayout from "./components/AppLayout/AppLayout.jsx";
import ThemeButton from "./components/Button/ThemeButton.jsx";

export default function Home() {

const pages = [
  {path: "/about", text: "About"},
  {path: "/blog", text: "Show Blog"},
  {path: "/hybrid", text: "Hybrid Page"}
]


return (
    <AppLayout>
        <Title text={"Welcome to my first Next.js application!"}/>
        <p className={styles.para}>This application is built during Fundamentals of Next.js course!</p>
        <nav className={styles.navigation}>
          {pages.map((page, i) => (
            <Navigation key={i} path={page.path}>
              <Button key={i} text={page.text}/>
            </Navigation>
          ))}
        </nav>
        <ThemeButton />
    </AppLayout>
  );
}
