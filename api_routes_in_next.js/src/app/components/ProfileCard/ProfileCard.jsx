import styles from "./ProfileCard.module.css"

export default function ProfileCard({color}){
    return(
        <div style={{
            backgroundColor: color,
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            padding: "10px",
            borderRadius: "16px",
            gap: "5px"
        }}>
            <h3 className="font-bold text-2xl underline italic text-center">Profile</h3>
            <section className={styles.cardSection}>
                <label className={styles.cardLabel}>Name:</label>
                <p className={styles.cardPara}>Pekka Puupää</p>
            </section>
            <section className={styles.cardSection}>
                <label className={styles.cardLabel}>ID:</label>
                <p className={styles.cardPara}>123456789</p>
            </section>
             <section className={styles.cardSection}>
                <label className={styles.cardLabel}>Email:</label>
                <p className={styles.cardPara}>pekka@puupaa.com</p>
            </section>
        </div>
    )
}