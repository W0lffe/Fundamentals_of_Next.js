import Image from "next/image";
import Navigation from "./components/Navigation/Navigation.jsx"
import styles from "./home/home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
        <Image
          className={styles.image}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <h1 className={styles.title}>Welcome to my first Next.js App!</h1>
        <p className={styles.para}>This application is built during the first tasks in this course</p>
        <nav className={styles.navigation}>
          <Navigation path={"/about"} text={"About"}/>
          <Navigation path={"/blog/post"} text={"Show Recent Blog Post"}/>
        </nav>
    </div>
  );
}
