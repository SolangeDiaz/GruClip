import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const IniciarSesion = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img
            src={logo}
            alt="Descripción de la imagen"
            className="img-fluid rounded"
            style={{ maxWidth: '100%' }}
          />
        </div>
        <div className="col-md-6 offset-md-1">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Iniciar Sesión</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="tuemail@ejemplo.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Contraseña"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Iniciar Sesión
                </button>
              </form>
              <div className="text-center mt-3">
                {/* El enlace para recuperar la contraseña */}
                <Link to="/RecuperarContrasena" className="btn btn-link">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;

