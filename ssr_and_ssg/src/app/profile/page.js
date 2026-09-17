import AppLayout from "../components/AppLayout/AppLayout"
import Navigation from "../components/Navigation/Navigation"
import Button from "../components/Button/Button"
import ProfileCard from "../components/ProfileCard/ProfileCard";

export default async function Page() {

    const response = await fetch("http://localhost:3000/api/profile", {cache: "no-store"});
    const profile = await response.json();
    console.log(profile)

    console.log('Rendering profile on server', new Date().toLocaleString("fi-FI"))

    return (
        <AppLayout>
            <h1>Profile</h1>
            {(profile?.name && profile?.title) && <ProfileCard {...profile} />}
            <Navigation path={"/"} >
                <Button text={"Back To Home"} />
            </Navigation>
        </AppLayout>
    )
}