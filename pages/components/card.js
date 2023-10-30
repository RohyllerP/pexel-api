import Video from '../components/video';
import styles from "../../styles/Main.module.css";
export default function Cards({ title, imgLogo, imgInfo, minut, info, enlace, like, onImg, identi, auxType  }) {
    return (
        <div className="mt-2 border-top p-2 ">
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <div>
                        <img style={{ width: "30px", height: "30px" }} src={imgLogo} alt="" />
                    </div>
                    <div className="ps-3 d-flex">
                        <div>
                            <p className="fw-bold">{title}</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="pe-3"><p>{minut} min</p></div>
                    <div><img style={{ width: "15px", height: "15px" }} src="img/puntos.png" alt="" /></div>
                </div>
            </div>
            <section className={styles.card}>
                <article style={{ position: "relative", top: "-15px" }}>
                    <div className="pb-2">
                        <p>{info}</p>
                        <a className="text-primary text-decoration-none" href={enlace} target="_blank">Link {auxType == true ? "de la imagen": "del video"}</a>
                    </div>
                    <div style={{ cursor: "pointer" }}>
                        {auxType == true
                            ? <img className="rounded-3" style={{ width: "100%", height: "52vh" }} src={imgInfo} alt="" />
                            : <Video imgInfo={imgInfo} />
                        }
                    </div>
                </article>
                <article className="pt-2">
                    <div className="d-flex" style={{ gap: "20px" }}>
                        <div>
                            <button id={identi} onClick={onImg} style={{ border: "0px", backgroundColor: "transparent" }}>
                                {like <= 0
                                    ? <img src="img/corazon-2.png" alt="" />
                                    : <img src="img/corazon-2-rojo.png" alt="" />
                                }
                            </button>
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <img style={{width: "20px", height: "20px" }} src="img/repetir.png" alt="" />
                        </div>
                        <div style={{ cursor: "pointer"}}>
                            <img style={{width: "15px", height: "15px" }} src="img/compartir-2(1).png" alt="" />
                        </div>
                    </div>
                    <p>{like} Me gustas</p>
                </article>
            </section>
        </div>
    )
}