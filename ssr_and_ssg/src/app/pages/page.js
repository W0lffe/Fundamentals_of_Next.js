import AppLayout from "../components/AppLayout/AppLayout";
import Navigation from "../components/Navigation/Navigation";
import Button from "../components/Button/Button";

export default async function Page(){

    const response = await fetch("http://localhost:3000/api/posts");
    const posts = await response.json();
    console.log(posts)


    return(
        <AppLayout>
            <h1>Posts</h1>
            <ul className="flex flex-col border border-black bg-white rounded-md p-5 gap-2">
                {posts.length > 0 && posts.map((post, i) => (
                    <li key={i} className="border-black border p-2 rounded-sm bg-gray-900/90 text-white">
                        <h2>{`#${i+1} ${post.user}`}</h2>
                        <p>{post.message}</p>
                    </li>
                ))}
            </ul>
            <Navigation path={"/"} >
                <Button text={"Back To Home"} />
            </Navigation>
        </AppLayout>
    )
}