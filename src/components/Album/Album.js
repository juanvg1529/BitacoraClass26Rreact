import React from "react";
import "./Album.styles.css";

function Album(props) {
  return (
    <div className="album-container">
      <div className="album-contenido">
        <img height="100%" src={props.cover} alt="album cover" />
      </div>
      <div className="album-info">
        <h1 className="album-titulo">{props.artista}</h1>
        <h3>{props.agrupacion}</h3>
        <p className="album-subtitulo">{props.titulo}</p>
        <p>({props.fecha})</p>
        <div className="genero">{props.genero}</div>
      </div>
    </div>
  );
}

export default Album;
