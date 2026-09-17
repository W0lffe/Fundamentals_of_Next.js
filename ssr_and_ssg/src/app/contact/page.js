import AppLayout from "../components/AppLayout/AppLayout"
import Navigation from "../components/Navigation/Navigation"
import Button from "../components/Button/Button"
import ContactForm from "../components/ContactForm/ContactForm"

export default function Page() {

    return (
        <AppLayout>
            <ContactForm />
            <Navigation path={"/"} >
                <Button text={"Back To Home"} />
            </Navigation>
        </AppLayout>
    )
}