import { Link } from 'react-router-dom';
import { useState } from 'react';

const RecuperarContrasena = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Expresión regular simple para validar correos electrónicos
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setError('Por favor, introduce un correo electrónico válido.');
      return;
    }

    setError(''); // Limpia los errores si todo está bien

    // Lógica para enviar el correo electrónico
    console.log('Correo electrónico enviado a:', email);

    // Aquí puedes llamar a una API que envíe el enlace de recuperación
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Recuperar Contraseña</h5>
              <p className="text-center">
                Ingresa tu correo electrónico y te enviaremos un enlace para recuperar tu contraseña.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Maneja el estado del correo electrónico
                    placeholder="tuemail@ejemplo.com"
                    required
                  />
                </div>
                {error && <div className="text-danger mb-3">{error}</div>}
                <button type="submit" className="btn btn-primary w-100">
                  Enviar Enlace de Recuperación
                </button>
              </form>
              <div className="text-center mt-3">
                <Link to="/IniciarSesion">Volver al inicio de sesión</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecuperarContrasena;
