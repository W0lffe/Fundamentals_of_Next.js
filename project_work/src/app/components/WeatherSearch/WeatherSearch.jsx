export default function WeatherSearch({action, ref}){

    return(
        <>
            <h3>Search Weather By City Name</h3>
            <input type="text" ref={ref}/>
            <button onClick={action}>Search!</button>
        </>
    )
}