import styles from "./WeatherSearch.module.css"

export default function WeatherSearch({action, ref}){

    return(
        <>
            <h2>Search Weather By City Name</h2>
            <input type="text" ref={ref} className={styles.input}/>
            <button onClick={action} className={styles.btn}>Search!</button>
        </>
    )
}