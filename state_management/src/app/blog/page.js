export const revalidate = 60;
import AppLayout from "../components/AppLayout/AppLayout";
import Navigation from "../components/Navigation/Navigation";
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
import ListItemWrapper from "../components/ListItemWrapper/ListItemWrapper";

export default async function Page(){

    const response = await fetch("http://localhost:3000/api/posts", {next: {revalidate: 60}});
    const posts = await response.json();
    console.log(posts)

    const timestamp = new Date().toLocaleString("fi-FI");

    return(
        <AppLayout>
            <Title text={"Posts"}/>
            <p>{`Last updated: ${timestamp}`}</p>
            <ul className="flex flex-col border rounded-md p-5 gap-2">
                {posts.length > 0 && posts.map((post, i) => (
                    <ListItemWrapper key={i}>
                        <h2>{`#${i+1} ${post.user}`}</h2>
                        <p>{post.message}</p>
                    </ListItemWrapper>
                  
                ))}
            </ul>
            <Navigation path={"/"} >
                <Button text={"Back To Home"} />
            </Navigation>
        </AppLayout>
    )
}