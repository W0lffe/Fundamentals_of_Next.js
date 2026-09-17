import Navigation from "../components/Navigation/Navigation";
import Button from "../components/Button/Button";
import AppLayout from "../components/AppLayout/AppLayout";
import Title from "../components/Title/Title";

export default function Page() {
    return (
        <AppLayout>
            <Title text={"About This Course"}/>
            <p>This course is about Next.js, a framework built on top of React</p>
            <Navigation path={"/"} >
                <Button text={"Back To Home"} />
            </Navigation>
        </AppLayout>
    )
}