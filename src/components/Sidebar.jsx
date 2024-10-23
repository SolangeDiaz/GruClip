
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">GRUCLIP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item"><a className="nav-link" href="#about">Nuestra propuesta</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Servicios</a></li>
            <li className="nav-item"><a className="nav-link" href="#beneficios">Beneficios</a></li>
            {/* Cambiar el enlace a Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/IniciarSesion">¡Quiero participar!</Link>
            </li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
