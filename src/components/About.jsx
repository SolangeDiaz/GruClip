// About.jsx

const About = () => {
  return (
    <section className="page-section" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">NUESTRA PROPUESTA</h2>
            <hr className="divider divider-light" />
            <p className="text-white mb-4">
              GRUCLIP es una aplicación web creada en la Ciudad de Córdoba que agrupa a distintas empresas de grúas del país.
              En GRUCLIP tendrás una serie de funcionalidades que ayudaran a que tu empresa a organizarse mas efectivamente.

            </p>
            <a className="btn btn-light btn-xl" href="#services">Servicios</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
