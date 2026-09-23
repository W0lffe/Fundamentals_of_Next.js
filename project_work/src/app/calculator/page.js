"use client";
import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import CalcBtnGrid from "../components/CalcBtnGrid/CalcBtnGrid";
import Navigation from "../components/Navigation/Navigation";
import Title from "../components/Title/Title";
import calculate from "./math";

export default function Calculator() {

    const [values, setValues] = useState("");
    const [error, setError] = useState(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);
    }, [])

    const determineAction = (value) => {

        if (value === "C") {
            setValues("");
            setError(null);
            return;
        }
        else if (value === "=") {

            const { result, calcError } = calculate(values);

            if (calcError) {
                setError(calcError);
                return;
            }

            setError(null)
            setValues(values + "=" + result)
            return;
        }
        else {
            if (!Number(values[values.length - 1]) && ["*", "/", "-", "+"].includes(value)) {
                const newValue = values.slice(0, values.length - 1);
                setValues(newValue + value);
            }
            else {
                setValues(values + value);
            }
        }

    }

    const views = [
        { path: "/", page: "Back to Home", image: null }
    ]

    return (
        <AppLayout>
            <Title text={"Calculator"} />
            <div className={`transition-all duration-1000 flex flex-col w-full items-center ${isActive ? "opacity-100" : "opacity-0"}`}>
                {error && <p className="animate-pulse text-red-600 font-semibold">{error}</p>}
                <input type="text"
                    value={values}
                    readOnly
                    className="border-black border-3 w-full md:w-4/10 h-25 text-3xl text-center font-semibold rounded-2xl"
                />
                <CalcBtnGrid action={determineAction} />
            </div>
            <Navigation pages={views} />
        </AppLayout>
    )
}