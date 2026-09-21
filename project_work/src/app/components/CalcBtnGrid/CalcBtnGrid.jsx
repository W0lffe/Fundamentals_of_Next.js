import styles from "./CalcBtnGrid.module.css"
const buttons = ["C", "/", "*", "-", "7", "8", "9", "+", "4", "5", "6", "=", "1", "2", "3", "0"]

export default function CalcBtnGrid({action}){



    return(
        <div className={styles.buttons}>
            {buttons.map((value, i) => (
                <button key={i} className={styles.button} onClick={() => action(value)}>{value}</button>
            ))}
        </div>
    )

}