import { NextResponse } from "next/server";

const buildDataPackage = (weatherResponse) => {

    const parsedData = {
        timezone: `${weatherResponse.timezone} ${weatherResponse.timezone_abbreviation}`,
        time: weatherResponse.current.time.split("T").join(" "),
        current: weatherResponse.current.temperature_2m,
        max: weatherResponse.daily.temperature_2m_max[0],
        min: weatherResponse.daily.temperature_2m_min[0],
        sunrise: weatherResponse.daily.sunrise[0].split("T").join(" "),
        sunset: weatherResponse.daily.sunset[0].split("T").join(" "),
        hourly: weatherResponse.hourly
    }

    return parsedData;
}

export async function GET(req, {params}){

    const {city} = await params;
    const location = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
    )

    const locRes = await location.json()
    if(!locRes.results){
        return NextResponse.json({message: "City not found!"}, { status: 400 })
    }

    const resultCity = locRes.results[0].name
    const country = locRes.results[0].country
    const lat = locRes.results[0].latitude;
    const long = locRes.results[0].longitude;

    const weather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_min,temperature_2m_max,sunrise,sunset&hourly=temperature_2m,apparent_temperature,rain&current=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1`
    )

    const weatherRes = await weather.json();
    const weatherData = buildDataPackage(weatherRes);

    //console.log(weatherRes)

    return NextResponse.json({country, city: resultCity, weatherData},  { status: 200 })
}