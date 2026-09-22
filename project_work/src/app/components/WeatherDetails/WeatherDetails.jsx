
export default function WeatherDetails({data}){

    const weather = data.weatherData;

    return(
        <div>
            <h2>{`Weather at ${data.city}, ${data.country}`}</h2>
            <h3>{`Timezone ${weather.timezone}`}</h3>
            <section>
                <p>{`Current temperature: ${weather.current}`}</p>
                <p>{`Max temperature temperature: ${weather.max}`}</p>
                <p>{`Min temperature: ${weather.min}`}</p>
            </section>
            <section>
                <p>{`Sunrise: ${weather.sunrise}`}</p>
                <p>{`Sunset: ${weather.sunset}`}</p>
            </section>
            <p>{weather.time}</p>
        </div>
    )
}