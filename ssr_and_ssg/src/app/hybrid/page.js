import AppLayout from "../components/AppLayout/AppLayout";
import Navigation from "../components/Navigation/Navigation";
import Button from "../components/Button/Button";

export default async function Page() {

    let response = await fetch("http://localhost:3000/api/profile/stats", { cache: "no-store" });
    const profile = await response.json();
    console.log(profile)

    response = await fetch("http://localhost:3000/api/news", { next: { revalidate: 60 } });
    const news = await response.json();
    console.log(news)

    const timestamp = new Date().toLocaleString("fi-FI");

    return (
        <AppLayout>
            <h1>Hybrid Page</h1>
            <section>
                <h2>Static Section</h2>
                <p className="text-xl">{`This section displays news from my own mock data. Revalidation is set to 60 seconds. Last updated ${timestamp}`}</p>
                <ul>
                    {news.map((item, i) => (
                        <li className="border border-black bg-white p-3 m-1">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Dynamic Section</h2>
                <p className="text-xl">{`This section displays my study stats from my own mock data. This should change data instantly with request.`}</p>
                <p className="text-xl">{` Last updated ${timestamp}`}</p>
                <section className="bg-white/40 text-lg text-center border-black border m-1">
                    <h2>{profile.name}</h2>
                    <p>{`Studying in school: ${profile.school}`}</p>
                    <p>{`Courses completed: ${profile.courses}`}</p>
                    <p>{`Credits: ${profile.credits}`}</p>
                </section>
            </section>
            <Navigation path={"/"} >
                <Button text={"Back To Home"} />
            </Navigation>
        </AppLayout>
    )
}