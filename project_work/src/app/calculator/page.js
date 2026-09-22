"use client";
import { useState } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import CalcBtnGrid from "../components/CalcBtnGrid/CalcBtnGrid";
import Navigation from "../components/Navigation/Navigation";
import Title from "../components/Title/Title";
import calculate from "./math";

export default function Calculator() {

    const [values, setValues] = useState("");
    const [error, setError] = useState(null);

    const determineAction = (value) => {

        if(value === "C"){
            setValues("");
            setError(null);
            return;
        }
        else if(value === "="){
            
            const {result, calcError} = calculate(values);

            if(calcError){
                setError(calcError);
                return;
            }

            setError(null)
            setValues(values + "=" + result)
            return;
        }
        else{
            if(!Number(values[values.length-1]) && ["*", "/", "-", "+"].includes(value)){
                const newValue = values.slice(0, values.length-1);
                setValues(newValue + value);
            }
            else{
                setValues(values + value);
            }
        }

    }

    const views = [
        { path: "/", page: "Back to Home" }
    ]

    return (
        <AppLayout>
            <Title text={"Calculator"} />
            {error && <p>{error}</p>}
            <input type="text" value={values} readOnly/>
            <CalcBtnGrid action={determineAction}/>
            <Navigation pages={views} />
        </AppLayout>
    )
}