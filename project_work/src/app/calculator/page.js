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
        }
        else if(value === "="){
            
            const {result, calcError} = calculate(values);
            calcError && setError(calcError);

            console.log(result, calcError)

            if(result != null){
                console.log(result)
                setValues(values + "=" + result)
                if(error){
                    setError(null)
                }
            }
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