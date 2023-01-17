import React from "react";
import style from "./Preloader.module.css";
import loaderImg from "../../../assets/img/loading-gif.gif";

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={loaderImg} alt="Loading..." />
        </div>
    )
}

export default Preloader;