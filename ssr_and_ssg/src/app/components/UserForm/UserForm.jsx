"use client";
import { useState } from "react";

export default function UserForm() {

    const [response, setResponse] = useState(null);

    const handlePost = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");

        try {
            const res = await fetch("http://localhost:3000/api/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eztoken'
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone
                })
            })

            const data = await res.json();
            setResponse({message: data.message});
        } catch (error) {
            setResponse({message: "Error occured while posting to database!"});
        }


    }

    return (
        <div>
            <form onSubmit={handlePost}>
                <label htmlFor="name">Enter Name</label>
                <input type="text"
                    name="name"
                    id="name"
                />
                <label htmlFor="email">Enter Email</label>
                <input type="text"
                    name="email"
                    id="email"
                />
                <label htmlFor="phone">Enter Phone</label>
                <input type="text"
                    name="phone"
                    id="phone"
                />
                <button className="rounded-md border border-white bg-gray-900/90 text-white p-3">Submit</button>
            </form>
            {response?.message && <p>{response.message}</p>}
        </div>
    )
}