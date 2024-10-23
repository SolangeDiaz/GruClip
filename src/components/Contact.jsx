// Contact.jsx

const Contact = () => {
  return (
    <section className="page-section bg-blue text-black" id="contact">
      <div className="container">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">CONTACTO</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">Si tienes preguntas o necesitas más información, no dudes en contactarnos.</p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-6 mx-auto">
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Tu nombre" data-sb-validations="required" />
                  <label htmlFor="name">Nombre</label>
                  <div className="invalid-feedback" data-sb-feedback="name:required">Tu nombre es obligatorio.</div>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" placeholder="Tu correo electrónico" data-sb-validations="required,email" />
                  <label htmlFor="email">Correo Electrónico</label>
                  <div className="invalid-feedback" data-sb-feedback="email:required">Tu correo electrónico es obligatorio.</div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">Tu correo electrónico debe ser válido.</div>
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control" id="message" placeholder="Tu mensaje" style={{ height: '12rem' }} data-sb-validations="required" />
                  <label htmlFor="message">Mensaje</label>
                  <div className="invalid-feedback" data-sb-feedback="message:required">Tu mensaje es obligatorio.</div>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Enviar Mensaje</button>
                </div>
              </form>
            </div>
          </div>
        </div>        
    </section>
  );
};

export default Contact;
