import React from "react";

import Album from "./components/Album/Album";
import { albumInfo, albumes } from "./data/albums";

import "./styles.css";

export default function App() {
  return (
    <div className="app">
      {albumes.map((elemento) => {
        return (
          <Album
            artista={elemento.artista}
            titulo={elemento.titulo}
            fecha={elemento.fecha}
            agrupacion={elemento.agrupacion}
            cover={elemento.cover}
            genero={elemento.genero}
          />
        );
      })}
    </div>
  );
}
