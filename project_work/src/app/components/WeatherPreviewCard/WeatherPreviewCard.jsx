
export default function WeatherPreviewCard({ itemToPreview, action }) {
    return(
        <div onClick={() => action(itemToPreview)} className="border border-black rounded-lg p-2 hover:p-3 transition-all duration-150 focus:bg-gray-600/70">
            <h3>{`${itemToPreview.city}, ${itemToPreview.country}`}</h3>
            <p>{itemToPreview.weatherData.time}</p>
        </div>
    )
}