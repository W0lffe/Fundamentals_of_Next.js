import AppLayout from "../components/AppLayout/AppLayout"
import Title from "../components/Title/Title"
import Navigation from "../components/Navigation/Navigation"

export default function Weather() {

    const views = [
        { path: "/", page: "Back to Home" }
    ]

    return (
        <AppLayout>
            <Title text={"Weather API"} />
            <Navigation pages={views} />
        </AppLayout>
    )
}