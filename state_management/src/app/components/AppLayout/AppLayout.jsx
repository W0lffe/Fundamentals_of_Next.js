"use client";
import { useTheme } from "../../context/ThemeContext"
import Image from "next/image";

export default function AppLayout({ children }) {

    const { theme } = useTheme();
    console.log(theme)

    const inlineStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "25px",
        minHeight: "100vh",
        backgroundColor: theme === 'light' ? "white" : "black",
        color: theme === 'light' ? "black" : "white",
    }

    return (
        <div style={inlineStyle}>
            <Image
                className={`w-[200px] h-[100px] m-2 ${theme === "light" ? "" : "invert"}`}
                src="../next.svg"
                alt="Next.js logo"
                width={100}
                height={20}
                priority
            />
            {children}
        </div>
    )
}