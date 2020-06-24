import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="Nav">
      <nav className="navbar navbar-expand-lg fixed-top">
        <NavLink className="navbar-brand" to="/">
          Pantoja
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i class="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <NavLink
              activeClassName="Nav-active"
              className="nav-item nav-link"
              exact
              to="/"
            >
              Curriculum
            </NavLink>
            <NavLink
              activeClassName="Nav-active"
              className="nav-item nav-link"
              exact
              to="/downloads"
            >
              Downloads
            </NavLink>

            {/* publicacoes */}

            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Publicações
              </a>
              <div
                className="dropdown-menu"
                id="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <NavLink className="nav-item nav-link" to="/journals">
                  Journals
                </NavLink>
                <NavLink className="nav-item nav-link" to="/conferencias">
                  Conferências
                </NavLink>
                <NavLink className="nav-item nav-link" to="/livros">
                  Livros
                </NavLink>
              </div>
            </div>

            {/* colaboradores */}

            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Colaboradores
              </a>
              <div
                className="dropdown-menu"
                id="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <NavLink className="nav-item nav-link" to="/parceiros">
                  Parceiros
                </NavLink>
                <NavLink className="nav-item nav-link" to="/alunos">
                  Orientandos
                </NavLink>
              </div>
            </div>

            {/* cursos */}
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Cursos
              </a>
              <div
                className="dropdown-menu"
                id="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <NavLink className="nav-item nav-link" to="/patologia">
                  Patologia
                </NavLink>
                <NavLink
                  className="nav-item nav-link"
                  to="/sistemas-estruturais"
                >
                  Sistemas Estruturais
                </NavLink>
                <NavLink className="nav-item nav-link" to="/reforco-estrutural">
                  Reforço Estrutrual
                </NavLink>
              </div>
            </div>
            {/* fim cursos  */}
          </div>
        </div>
      </nav>
    </div>
  );
}
