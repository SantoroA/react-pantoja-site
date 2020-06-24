import React from "react";
import lattes from "./imgs/lattes2.png";
import "./Alunos.css";
import aline from "./imgs/aline.jpg";
import lilian from "./imgs/lilian.jpg";

export default function Alunos() {
  return (
    <div className="Alunos container">
      <h1 style={{ marginTop: 100 }}>Orientandos</h1>
      {/* card-1 */}
      <div className="row">
        <div className="col-6 mb-4  justify-content-around col-md-4 col-lg-3">
          <div className="card" style={{ width: "100%" }}>
            <img src={aline} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Aline Santoro</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/aline.santoro.7"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aline-santoro-88564a15b/"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.researchgate.net/profile/Aline_Santoro"
              >
                <i className="fab fa-researchgate"></i>
              </a>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="http://lattes.cnpq.br/6106450187026235"
              >
                <img className="lattesImage" src={lattes} alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* card-2 */}

        <div className="col-6  mb-4  justify-content-around col-md-4 col-lg-3">
          <div className="card" style={{ width: "100%" }}>
            <img src={lilian} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Lilian Nunes</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/aline.santoro.7"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aline-santoro-88564a15b/"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.researchgate.net/profile/Aline_Santoro"
              >
                <i className="fab fa-researchgate"></i>
              </a>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="http://lattes.cnpq.br/6106450187026235"
              >
                <img className="lattesImage" src={lattes} alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* card-1 */}

        <div className="col-6  mb-4 justify-content-around col-md-4 col-lg-3">
          <div className="card" style={{ width: "100%" }}>
            <img src={aline} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Aline Santoro</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/aline.santoro.7"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aline-santoro-88564a15b/"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.researchgate.net/profile/Aline_Santoro"
              >
                <i className="fab fa-researchgate"></i>
              </a>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="http://lattes.cnpq.br/6106450187026235"
              >
                <img className="lattesImage" src={lattes} alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* card-1 */}

        <div className="col-6  mb-4 justify-content-around col-md-4 col-lg-3">
          <div className="card" style={{ width: "100%" }}>
            <img src={aline} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Aline Santoro</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/aline.santoro.7"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aline-santoro-88564a15b/"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.researchgate.net/profile/Aline_Santoro"
              >
                <i className="fab fa-researchgate"></i>
              </a>
              <a
                className="p-1"
                target="_blank"
                rel="noopener noreferrer"
                href="http://lattes.cnpq.br/6106450187026235"
              >
                <img className="lattesImage" src={lattes} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
