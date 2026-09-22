"use client";
import { useState } from "react";
import AppLayout from "../components/AppLayout/AppLayout"
import Title from "../components/Title/Title"
import Navigation from "../components/Navigation/Navigation"
import EditorButtonPanel from "../components/EditorButtonPanel/EditorButtonPanel";

export default function Editor() {

    const initialState = {text: "", wordCount: 0, charCount: 0};
    const [textProperties, setTextProperties] = useState(initialState);

    const views = [
        { path: "/", page: "Back to Home" }
    ]
    
    const capitalizeWords = () => {

        const string = textProperties.text;
        const capitalized = string.split(/[\s]+/)
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                                    .join(" ");
                                    
        setTextProperties({...textProperties, text: capitalized});
    }

    const countCharsAndWords = (string) => {
        const charCount = string.trim().length;
        //console.log(charCount)
        const wordCount = string.split(/[.,\s]+/).length;
        //console.log(words.length)
        setTextProperties({text: string, wordCount, charCount})
    }

    const setTextToUpperCase = () => setTextProperties({...textProperties, text: textProperties.text.toUpperCase()});
    const setTextToLowerCase = () => setTextProperties({...textProperties, text: textProperties.text.toLowerCase()});
    const clearText = () => setTextProperties(initialState);

    const editorFunctions = [
        {action: setTextToUpperCase, text: "UPPERCASE"},
        {action: setTextToLowerCase, text: "lowercase"},
        {action: capitalizeWords, text: "Capitalize Words"},
        {action: clearText, text: "Clear text"}
    ]

    return (
        <AppLayout>
            <Title text={"Editor"} />
            <span>
                <p>{`Character count: ${textProperties.charCount}`}</p>
                <p>{`Word count: ${textProperties.wordCount}`}</p>
            </span>
            <textarea onChange={(e) => countCharsAndWords(e.target.value)} value={textProperties.text}></textarea>
            <EditorButtonPanel functions={editorFunctions} />
            <Navigation pages={views} />
        </AppLayout>
    )
}