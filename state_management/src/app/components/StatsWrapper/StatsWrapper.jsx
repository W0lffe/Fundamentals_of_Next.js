"use client";
import { useTheme } from "@/app/context/ThemeContext";

export default function StatsWrapper({children}){

    const {theme} = useTheme();

    const style = `text-lg text-center rounded-sm border m-1 
                   ${theme === "light" ? "bg-white text-black border-black" : "bg-black text-white border-white" }`

    return <section className={style}>{children}</section>
}