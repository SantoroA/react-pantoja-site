import React from "react";
import lattes from "./imgs/lattes2.png";

export default function Alunos() {
  return (
    <div className="Alunos">
      <h1 style={{ marginTop: 100 }}>Orientandos</h1>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            className="p-1"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=100014034870183"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            className="p-1"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jo%C3%A3o-pantoja-b940a418/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="p-1"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.researchgate.net/profile/Joao_Pantoja2"
          >
            <i className="fab fa-researchgate"></i>
          </a>
          <a
            className="p-1"
            target="_blank"
            rel="noopener noreferrer"
            href="http://lattes.cnpq.br/6879105340639188"
          >
            <img className="lattesImage" src={lattes} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
