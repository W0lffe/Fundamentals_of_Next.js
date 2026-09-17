"use client";
import { useTheme } from "@/app/context/ThemeContext";

export default function ListItemWrapper({ children }) {

    const { theme } = useTheme();

    const style = `rounded-sm border m-1 p-3
                ${theme === "light" ? "bg-white text-black border-black" : "bg-black text-white border-white"}`

    return <li className={style}>{children}</li>
}