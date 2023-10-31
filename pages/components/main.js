import Crear from '../components/crear';
import Cards from '../components/card';
import { useImmer } from 'use-immer';
import React, { useRef, useEffect, useState } from 'react';
import styles from "../../styles/Main.module.css";
import dotenv from 'dotenv';
dotenv.config();

export default function Main() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // 1
  const [query, setQuery] = useState('Programming');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [videos, setVideos] = useState([]);
  // 2
  const apiKey = process.env.DB_HOST;
  const getVideos = async () => {
    setLoading(true);
    await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        Authorization: apiKey
      }
    }).then((resp) => {
      return resp.json();
    }).then((data) => {
      if (data.total_results == 0) setLoading(false);
      data.photos.length > 3 ? setData(data.photos.slice(0, 3)) : setData(data.photos);
    }).catch((err) => {
      setData([]);
      console.log("ERROR en DATOS IMG ruta no existe ");
    })
    await fetch(`https://api.pexels.com/videos/search?query=${query}`, {
      headers: {
        Authorization: apiKey
      }
    }).then((res) => {
      return res.json();
    }).then((vids) => {
      vids.videos.length > 3 ? setVideos(vids.videos.slice(0, 3)) : setVideos(vids.videos);
    }).catch((err) => {
      setVideos([]);
      console.log("ERROR en DATOS VIDEOS ruta no existe ");
    })
  }
  // 3
  useEffect(() => {
    getVideos();
  }, [query])

  const btnRef = useRef(null);
  const inputRef = useRef(null);
  const [publi, updatePubli] = useImmer([
    {
      nameAccount: 'dolartoday',
      timestamp: '3 min',
      description: '',
      linkFeed: 'dolartoday.com/que-s...',
      likes: 0
    },
    {
      nameAccount: 'eldiario',
      timestamp: '6 min',
      description: 'Dudamel fue destituido de la plantilla del Club Nexaca, equipo de la liga mexicana',
      linkFeed: 'eldiario.com/2023...',
      likes: 0
    },
    {
      nameAccount: 'eldia',
      timestamp: '5 min',
      description: 'Dudamel 3',
      linkFeed: 'eldiario.com/2024...',
      likes: 0
    },
    {
      nameAccount: 'eldi',
      timestamp: '5 min',
      description: 'Dudamel 4',
      linkFeed: 'eldiario.com/2025...',
      likes: 0
    },
    {
      nameAccount: 'eld',
      timestamp: '4 min',
      description: 'Dudamel 3',
      linkFeed: 'eldiario.com/2026...',
      likes: 0
    },
    {
      nameAccount: 'eldi',
      timestamp: '8 min',
      description: 'Dudamel 5',
      linkFeed: 'eldiario.com/2026...',
      likes: 0
    },
    {
      nameAccount: 'eld',
      timestamp: '9 min',
      description: 'Dudamel 6',
      linkFeed: 'eldiario.com/2027...',
      likes: 0
    }
  ]);

  const handlePubli = (e) => {
    if (e.target.parentElement.id) {
      const str = e.target.parentElement.id;
      const index = str.indexOf("-");
      const subStr = str.substring(index + 1);
      updatePubli(draft => {
        if (draft[parseInt(subStr)].likes == 0) {
          draft[parseInt(subStr)].likes = draft[parseInt(subStr)].likes + 1;
        } else {
          draft[parseInt(subStr)].likes = draft[parseInt(subStr)].likes - 1;
        }
      })
    }
  }
  const handleInput = (e) => {
    inputRef.current.click();
  }

  const paraTi = () => {
    const sum = publi.map((object) => {
      if (object.likes) {
        return object.likes;
      } else {
        return 0;
      }
    }).reduce((accumulator, likes) => {
      accumulator += likes;
      return accumulator;
    }, 0);
    return sum;
  }
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <main className={styles.main}>
      <div style={{
        position: "fixed", right: "20px", bottom: "20px",
        border: "1px solid #C9C9C9", borderRadius: "5px",
        zIndex: "999999999",
      }}>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalThree">Like</button>
      </div>

      <button type="button" ref={btnRef} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      </button>

      <button type="button" ref={inputRef} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalTwo">
      </button>
      <div className="modal fade" id="exampleModalTwo" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ borderBottom: "0px" }}>
              <div className="ps-1 pt-2 d-flex">
                <div>
                  <img style={{ width: "30px", height: "30px", borderRadius: "50%" }} src="img/logo.jpg" alt="" />
                </div>
                <div className="ms-2" style={{ lineHeight: "0.7em" }}>
                  <p className="pt-2 fw-bold">Rohyller Pereira</p>
                </div>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <select onChange={handleChange} className="form-select" aria-label="Default select example">
                  <option value="">Opciones posibles</option>
                  <option value="Programming">Programming</option>
                  <option value="calendar">calendar</option>
                </select>
              </div>
              <div className="d-flex justify-content-between pt-3 ps-1">
                <div style={{ paddingTop: "10px" }}>
                  <p>Esta es la palabra actual:  {query}</p>
                </div>
                <div>
                  <button className="btn btn-outline-primary" disabled>Desactivado</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModalThree" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ borderBottom: "0px" }}>
              <div className="pt-2 d-flex">
                <div style={{ lineHeight: "0.7em" }}>
                  <p className="pt-2 fw-bold">Me gustas</p>
                </div>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <p>Cantidad de me gustas en las publicaciones: {paraTi()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Crear
        handleInput={handleInput}
      />
      <div className="publicaciones pt-3" >
        {
          data.length > 0 ?
            data.map((pu, index) => {
              return (
                <Cards
                  key={index}
                  imgLogo={pu.hasOwnProperty('src') ? pu.src.original : pu.video_files[0].link}
                  title={pu.photographer}
                  minut={Math.floor(Math.random() * 20) + 1}
                  info={pu.alt}
                  imgInfo={pu.hasOwnProperty('src') ? pu.src.original : pu.video_files[0].link}
                  enlace={pu.url}
                  like={publi[index].likes}
                  onImg={handlePubli}
                  identi={`bt-${index}`}
                  idClass={`p-${index}`}
                  auxType={pu.hasOwnProperty('src') ? true : false}
                />
              )
            })
            : <p>No hay imagenes para mostrar... selecciona otra opción</p>
        }
        {
          videos.length > 0 ?
            videos.map((pu, index) => {
              return (
                <Cards
                  key={index}
                  imgLogo={pu.image}
                  title={pu.user.name}
                  minut={Math.floor(Math.random() * 20) + 1}
                  info="Click en la 'imagen'"
                  imgInfo={pu.video_files[0].link}
                  enlace={pu.url}
                  like={publi[index].likes}
                  onImg={handlePubli}
                  identi={`bt-${index}`}
                  idClas={`p-${index}`}
                  auxType={pu.hasOwnProperty('src') ? true : false}
                />
              )
            })
            : <p>No hay videos para mostrar... selecciona otra opción</p>
        }
      </div>
    </main>
  )
}
