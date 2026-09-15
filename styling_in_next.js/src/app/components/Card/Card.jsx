
export default function Card({color}){{

    return(
        <div style={{
            padding: "10px",
            backgroundColor: color,
            border: "1px solid black",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "5px"
        }}>
            <h3 style={{
                fontWeight: "600"
            }}>Card Component</h3>
            <p>Lorem larum ipsum dorem</p>
        </div>
    )
}

}