import Navigation from "@/app/components/Navigation/Navigation"

export default function Page(){
    return(
        <div className="flex flex-col items-center gap-5">
            <h1>Blog/Post</h1>
            <p>This is a page to show a post in a blog</p>
            <Navigation path={"/"} text={"Back to Home"} />
        </div>
    )
}