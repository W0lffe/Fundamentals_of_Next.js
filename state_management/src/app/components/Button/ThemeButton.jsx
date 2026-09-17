"use client";
import { useTheme } from "@/app/context/ThemeContext";
import styles from "./Button.module.css"

export default function ThemeButton(){

    const {theme, toggleTheme} = useTheme();

    return <button className={theme === "light" ? styles.themeButtonLight : styles.themeButtonDark} onClick={toggleTheme}>Switch Theme</button>
}