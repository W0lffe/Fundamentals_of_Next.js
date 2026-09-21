import AppLayout from "../components/AppLayout/AppLayout"
import Title from "../components/Title/Title"
import Navigation from "../components/Navigation/Navigation"

export default function Editor() {

    const views = [
        { path: "/", page: "Back to Home" }
    ]

    return (
        <AppLayout>
            <Title text={"Editor"} />
            <Navigation pages={views} />
        </AppLayout>
    )
}