"use client";
import AppLayout from "../components/AppLayout/AppLayout"
import Title from "../components/Title/Title"
import Navigation from "../components/Navigation/Navigation"
import { useWeather } from "../context/WeatherContext";
import { useState, useRef } from "react";
import WeatherSearch from "../components/WeatherSearch/WeatherSearch";
import WeatherDetails from "../components/WeatherDetails/WeatherDetails";
import WeatherPreviewCard from "../components/WeatherPreviewCard/WeatherPreviewCard";

export default function Weather() {

    const { previous, addNewResult, clearSearches } = useWeather();
    const inputCity = useRef();
    const [weatherData, setWeatherData] = useState(null);
    const [fetchError, setFetchError] = useState(null);

    const handleFetch = async () => {
        const input = inputCity.current.value;
        
        try {
            const res = await fetch(`/api/weather/${input}`, { cache: "no-store" })
            const resJson = await res.json();

            if(res.status === 400){
                setWeatherData(null)
                setFetchError(resJson.message);
                return;
            }

            fetchError && setFetchError(null)
            addNewResult(resJson)
            setWeatherData(resJson)

        } catch (error) {
            setWeatherData(null)
            setFetchError("Something went wrong...")
        }
      
    }

    const handleViewPreviousData = (item) => {
        //console.log(item)
        setWeatherData(item);
    }

    const views = [
        { path: "/", page: "Back to Home", image: null }
    ]

    return (
        <AppLayout>
            <Title text={"Weather API"} />
            <div className="grid grid-cols-2 w-full md:w-3/4">
                <section className="w-fit p-2 border-black border rounded-lg flex flex-col items-center gap-3 max-h-[750px] md:max-h-[600px] overflow-auto ">
                    <h2>Previous searches</h2>
                    {previous.length > 0 ? (
                        <>
                            {previous.map((item, i) => (
                                <WeatherPreviewCard key={i} action={handleViewPreviousData} itemToPreview={item} />
                            ))}
                            <button onClick={clearSearches} className="border border-black p-2 w-fit font-bold rounded-2xl hover:p-3 hover:bg-gray-500/60 transition-all duration-150 ">Clear</button>
                        </>
                    ) : (
                        <h3>No previous searches yet</h3>
                    )}
                </section>
                <section className="border-black border rounded-lg flex flex-col items-center gap-3 p-2">
                    <WeatherSearch action={handleFetch} ref={inputCity} />
                    {weatherData && <WeatherDetails data={weatherData} />}
                    {fetchError && <p on>{fetchError}</p>}
                </section>
            </div>
            <Navigation pages={views} />
        </AppLayout>
    )
}