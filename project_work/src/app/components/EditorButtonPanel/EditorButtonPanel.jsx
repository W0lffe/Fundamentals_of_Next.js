import styles from "./EditorButtonPanel.module.css"
export default function EditorButtonPanel({functions}){

    return(
        <div className={styles.panelDiv}>
            <h2 className={styles.editorH2}>Use The Functions Below To Edit The Text</h2>
            {functions.map((func, i) => (
                <button key={i} onClick={func.action} className={styles.editorBtn}>{func.text}</button>
            ))}
        </div>
    )
}