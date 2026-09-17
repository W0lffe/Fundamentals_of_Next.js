"use client";
import { useState } from "react";

export default function ContactForm() {

    const [response, setResponse] = useState(null);

    const handlePost = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get("name");
        const message = formData.get("message");

        console.log("TESTI", formData)

        try {
            const res = await fetch("http://localhost:3000/api/contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eztoken'
                },
                body: JSON.stringify({
                    name: name,
                    message: message
                })
            })

            console.log("response", res)

            const data = await res.json();
            console.log("data", data)

            setResponse({message: data.message})
        } catch (error) {
            setResponse({message: "Something went wrong! OOpps"})
        }


    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={handlePost}>
                <label htmlFor="name">Enter Name</label>
                <input type="text"
                    name="name"
                    id="name"
                />
                <label htmlFor="message">Enter Message</label>
                <input type="text"
                    name="message"
                    id="message"
                />
                <button className="rounded-md border border-white bg-gray-900/90 text-white p-3">Submit</button>
            </form>
            {response?.message && <h2>{response.message}</h2>}
        </div>
    )
}