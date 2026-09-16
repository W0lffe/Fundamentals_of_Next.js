import Navigation from "../components/Navigation/Navigation";
import Button from "../components/Button/Button";
import AppLayout from "../components/AppLayout/AppLayout";

export default function Page() {
    return (
        <AppLayout>
            <h1>About This Course</h1>
            <p>This course is about Next.js, a framework built on top of React</p>
            <Navigation path={"/"} >
                <Button text={"Back To Home"} />
            </Navigation>
        </AppLayout>
    )
}