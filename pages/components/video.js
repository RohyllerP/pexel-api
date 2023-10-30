import React,{useState,useRef, useEffect} from 'react';
import styles from '../../styles/Video.module.css';
export default function Video({imgInfo}){
    let referencia = useRef(null);
    let [isPlay,setIsPlay] = useState(false);
    useEffect(()=>{
        if (isPlay){
            referencia.current.play();
        }else{
            referencia.current.pause();
        }
    },[isPlay]);
    return (
        <video className={styles.video} onClick={()=>{setIsPlay(!isPlay)}} ref={referencia} src={imgInfo}></video>
    );
};