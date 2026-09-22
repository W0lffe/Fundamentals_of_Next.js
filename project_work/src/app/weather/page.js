"use client";
import AppLayout from "../components/AppLayout/AppLayout"
import Title from "../components/Title/Title"
import Navigation from "../components/Navigation/Navigation"
import { useWeather } from "../context/WeatherContext";
import { useState, useRef } from "react";
import WeatherSearch from "../components/WeatherSearch/WeatherSearch";
import WeatherDetails from "../components/WeatherDetails/WeatherDetails";

export default function Weather() {

    const {previous, addNewResult} = useWeather();
    const inputCity = useRef();
    const [weatherData, setWeatherData] = useState(null);

    const handleFetch = async () => {
        const input = inputCity.current.value;
        const formattedInput = input.charAt(0).toUpperCase() + input.slice(1);
        const res = await fetch(`/api/weather/${formattedInput}`, {next: {revalidate: 600}})
        const weather = await res.json();

        addNewResult({...weather, city: formattedInput})
        setWeatherData({...weather, city: formattedInput})
        //console.log({...weather, city: formattedInput})
    }

    const handleViewPreviousData = (item) => {
        //console.log(item)
        setWeatherData(item);
    }

    const views = [
        { path: "/", page: "Back to Home" }
    ]

    return (
        <AppLayout>
            <Title text={"Weather API"} />
            <div>
                <section>
                    <h3>Previous searches</h3>
                    {previous.length > 0 ? (
                        previous.map((item, i) => (
                            <div key={i} onClick={() => handleViewPreviousData(item)}>
                                <h2>{item.city}</h2>
                                <h3>{item.country}</h3>
                            </div>
                        ))
                    ) : (
                        <h3>No previous searches yet</h3>
                    )}
                </section>
                <section>
                    <WeatherSearch action={handleFetch} ref={inputCity}/>
                    {weatherData && <WeatherDetails data={weatherData} />}
                </section>
            </div>
            <Navigation pages={views} />
        </AppLayout>
    )
}