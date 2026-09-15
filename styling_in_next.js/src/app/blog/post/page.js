import Navigation from "@/app/components/Navigation/Navigation"
import Button from "@/app/components/Button/Button"
import AppLayout from "@/app/components/AppLayout/AppLayout"

export default function Page(){
    return(
        <AppLayout>
            <h1>Blog/Post</h1>
            <p>This is a page to show a post in a blog</p>
            <Navigation path={"/"}>
                <Button text={"Back To Home"} />
            </Navigation>
        </AppLayout>
    )
}