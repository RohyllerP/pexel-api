import NavComponent from "./nav"
import styles from "../../styles/Header.module.css";
export default function Header() {
    return (
      <header className={styles.header} >
        <div className={styles.contenedor}>
            <div className={styles.imgLogo}>
                <img src="img/logo.jpg" alt="logo"/>
            </div>
            <NavComponent />
            <div>
                <img className={styles.imgLineas} src="img/dos-lineas.png" alt="" />
            </div>
        </div>
      </header>
    )
}