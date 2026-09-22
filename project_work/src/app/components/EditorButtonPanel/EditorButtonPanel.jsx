
export default function EditorButtonPanel({functions}){

    return(
        <div>
            {functions.map((func, i) => (
                <button key={i} onClick={func.action}>{func.text}</button>
            ))}
        </div>
    )
}