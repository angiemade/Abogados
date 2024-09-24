import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">AB INITIO</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onMouseOver={(e) => {
                  const dropdown = document.getElementById('navbarDropdownMenu');
                  dropdown.classList.add('show');
                }}
                onMouseOut={(e) => {
                  const dropdown = document.getElementById('navbarDropdownMenu');
                  dropdown.classList.remove('show');
                }}
              >
                Servicios
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="navbarDropdownMenu">
                <li><Link className="dropdown-item" to="/derecho-penal">Derecho Penal</Link></li>
                <li><Link className="dropdown-item" to="/derecho-familia">Derecho de Familia</Link></li>
                <li><Link className="dropdown-item" to="/sucesiones">Sucesiones</Link></li>
                <li><Link className="dropdown-item" to="/derecho-administrativo">Derecho Administrativo</Link></li>
                <li><Link className="dropdown-item" to="/derecho-laboral">Derecho Laboral</Link></li>
                <li><Link className="dropdown-item" to="/derecho-previsional">Derecho Previsional</Link></li>
                <li><Link className="dropdown-item" to="/derecho-civil">Derecho Civil</Link></li>
                <li><Link className="dropdown-item" to="/derecho-comercial">Derecho Comercial</Link></li>
                <li><Link className="dropdown-item" to="/danos">Daños</Link></li>
                <li><Link className="dropdown-item" to="/reales">Reales</Link></li>
                <li><Link className="dropdown-item" to="/administracion-propiedades">Administración de Propiedades</Link></li>
                <li><Link className="dropdown-item" to="/asociaciones-sindicales">Asociaciones Sindicales</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/equipo">Equipo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
