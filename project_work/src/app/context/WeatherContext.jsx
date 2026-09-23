'use client';
import { createContext, useState, useContext } from 'react';

const WeatherContext = createContext({
    previous: [],
    addNewResult: () => {},
    clearSearches: () => {}
})

export default function WeatherProvider({children}){

    const [previousResults, setPreviousResults] = useState([]);

    const addNewResult = (newResult) => {
        setPreviousResults([...previousResults, newResult])
    }

    const clearSearches = () => {
        setPreviousResults([])
    }

    const ctxValue = {
        previous: previousResults,
        addNewResult,
        clearSearches
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