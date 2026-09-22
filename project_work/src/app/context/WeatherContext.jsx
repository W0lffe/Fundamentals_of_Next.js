'use client';
import { createContext, useState, useContext } from 'react';

const WeatherContext = createContext({
    previous: [],
    addNewResult: () => {}
})

export default function WeatherProvider({children}){

    const [previousResults, setPreviousResults] = useState([]);

    const addNewResult = (newResult) => {
        setPreviousResults([...previousResults, newResult])
    }

    const ctxValue = {
        previous: previousResults,
        addNewResult
    }

    return(
        <WeatherContext.Provider value={ctxValue}>
            {children}
        </WeatherContext.Provider>
    )
}

export function useWeather(){
    return useContext(WeatherContext);
}