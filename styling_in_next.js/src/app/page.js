import Image from "next/image";
import Navigation from "./components/Navigation/Navigation.jsx"
import styles from "./home/home.module.css"
import Title from "./components/Title/Title.jsx";
import Button from "./components/Button/Button.jsx";
import Card from "./components/Card/Card.jsx";
import AppLayout from "./components/AppLayout/AppLayout.jsx";
import Alert from "./components/Alert/Alert.jsx";
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";

export default function Home() {


const getRandomColor = () => {
  const colors = ["green", "blue", "red"];
  return colors[Math.floor(Math.random() * colors.length)];
}

return (
    <AppLayout>
        <Image
          className={styles.image}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <Title />
        <p className={styles.para}>This application is built during the first tasks in this course</p>
        <nav className={styles.navigation}>
          <Navigation path={"/about"}>
            <Button text={"About"} />
          </Navigation>
          <Navigation path={"/blog/post"}>
            <Button text={"Show Blog"} />
          </Navigation>
        </nav>
        <Card color={getRandomColor()} />
        <Alert />
        <ProfileCard color={getRandomColor()}/>
    </AppLayout>
  );
}
