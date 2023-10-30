import styles from "../../styles/Header.module.css";
export default function NavComponent() {
    return (
      <nav className="mt-3">
        <ul>
          <li>
            <a href="/">
              <img className={styles.imgSecond} src="img/casa.png" alt=""/>
            </a>
          </li>
          <li>
            <a href="https://rohyllerp.github.io/briefcase/" target="_blank" style={{position:"relative", top:"-2px"}}>
              <img className={styles.imgSecond} src="img/briefcase.png" alt=""/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rohyller-pereira-albarran-97b7b01b7/" target="_blank">
              <img className={styles.imgSecond} src="img/linkedin.png" alt=""/>
            </a>
          </li>
        </ul>
        <style jsx>{`
          ul {
            display: flex;
            list-style: none;
          }
          ul li{
            padding: 0px 20px;
          }
        `}</style>
      </nav>
    )
}