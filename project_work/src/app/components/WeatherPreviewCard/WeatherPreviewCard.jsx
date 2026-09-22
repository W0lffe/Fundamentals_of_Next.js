
export default function WeatherPreviewCard({ itemToPreview, action }) {
    return(
        <div onClick={() => action(itemToPreview)}>
            <h3>{`${itemToPreview.city}, ${itemToPreview.country}`}</h3>
            <p>{itemToPreview.weatherData.time}</p>
        </div>
    )
}