// Header.jsx
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="text-white font-weight-bold">
              <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </h1>
            <hr className="divider" />
            <p className="text-white-75 mb-5">
              GRUCLICK nació como una solución ante una posible eliminación del servicio de grúas, dispuesto por la Superintendencia de Seguros de la Nación Argentina.
              Somos una plataforma inclusiva que agrupa a todas las empresas de grúas que ofrecen un servicio eficiente, llegando a toda la Argentina.
            </p>
            <a className="btn btn-primary btn-xl" href="#about">PROPUESTA</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
