"use client";
import Navigation from "../components/Navigation/Navigation";

export default function Page() {
    return (
        <div className="flex flex-col items-center gap-5">
            <h1>About This Course</h1>
            <p>This course is about Next.js, a framework built on top of React</p>
            <Navigation path={"/"} text={"Back to Home"} />
        </div>
    )
}