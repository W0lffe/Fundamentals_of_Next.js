import styles from "./ProfileCard.module.css"

export default function ProfileCard({ name, title }) {

    const divStyle = {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        padding: "10px",
        borderRadius: "16px",
        border: "1px black solid",
        backgroundColor: "white",
        gap: "5px"
    }

    if(!name && !title){
        return <h2>No profile found!</h2>
    }

    return (
        <div style={divStyle}>
            <h3 className="font-bold text-2xl underline italic text-center">Profile Card</h3>
            <section className={styles.cardSection}>
                <label className={styles.cardLabel}>Name:</label>
                <p className={styles.cardPara}>{name}</p>
            </section>
            <section className={styles.cardSection}>
                <label className={styles.cardLabel}>Title:</label>
                <p className={styles.cardPara}>{title}</p>
            </section>

        </div>
    )
}