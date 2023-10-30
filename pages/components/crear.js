import styles from "../../styles/Crear.module.css";
import Swal from 'sweetalert2';
const publicar = () =>{
    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: "Dale en 'Seleccionar opción",
        showConfirmButton: false,
        timer: 1500
    })
}
export default function Header({ handleInput }) {
    return (
      <div className={styles.crear}>
        <div className={styles.flex}>
            <div>
                <img className={styles.img} src="img/logo.jpg" alt="" />
            </div>
            <div className="ps-3 pt-2">
                <input onClick={handleInput} style={{border: "0px"}} placeholder="Seleccionar opción..."/>
            </div>
        </div>
        <div>
            <button onClick={publicar} className={styles.publicar}>buscar</button>
        </div>
        <style jsx>
            {`
            p{
                padding-left: 15px;
            }
           `}
        </style>
      </div>
    )
}