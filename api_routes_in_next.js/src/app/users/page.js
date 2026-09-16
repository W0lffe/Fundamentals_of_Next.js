"use client";
import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout/AppLayout"
import Navigation from "../components/Navigation/Navigation"
import Button from "../components/Button/Button"
import UserForm from "../components/UserForm/UserForm"
import UserList from "../components/UserForm/UserList"

export default function Page() {

    const fetchUsers = async () => {

        try {
            const res = await fetch("/api/users");
            const data = await res.json();
            return data.users;
        } catch (error) {
            alert("error occured!")
            return [];
        }
    }

    const [database, setDatabase] = useState([]);

    useEffect(() => {

        const fetchData = async() => {
            const userData = await fetchUsers();
            setDatabase(userData);
        }
        
        fetchData();
    }, [])

    return (
        <AppLayout>
            <h1>User Database Management</h1>
            <UserForm setDatabase={setDatabase} />
            {database.length > 0 && (
                <>
                    <h2>Found Users</h2>
                    <UserList db={database} />
                </>
            )}
            <Navigation path={"/"} >
                <Button text={"Back To Home"} />
            </Navigation>
        </AppLayout>
    )
}