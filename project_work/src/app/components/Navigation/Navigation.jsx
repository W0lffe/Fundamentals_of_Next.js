import NavButton from "../NavButton/NavButton";
import styles from "./Navigation.module.css"

export default function Navigation({pages}){
    return(
        <nav className={styles.navi}>
            {pages.map((page, i) => (
                <NavButton key={i} {...page} />
            ))}
        </nav>
    )
}