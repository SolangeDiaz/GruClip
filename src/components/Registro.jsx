import logo from '../assets/logo.png';

const Registro = () => {
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
        <div className="col-md-8">
          <form>
            <div className="form-row">
              <div className="form-group col-md-8">
                <label htmlFor="inputNombre">Nombre</label>
                <input type="text" className="form-control" id="inputNombre" placeholder="Nombre" />
              </div>

              <div className="form-group col-md-8">
                <label htmlFor="inputApellido">Apellido</label>
                <input type="text" className="form-control" id="inputApellido" placeholder="Apellido" />
              </div>

              <div className="form-group col-md-8">
                <label htmlFor="inputTelefono">Teléfono</label>
                <input type="text" className="form-control" id="inputTelefono" placeholder="Teléfono" />
              </div>

              <div className="form-group col-md-8">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
              </div>

              <div className="form-group col-md-8">
                <label htmlFor="inputPassword4">Contraseña</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Contraseña" />
              </div>

              <div className="form-group col-8">
                <button type="submit" className="btn btn-primary w-100 mb-3">Iniciar sesión</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
