const Beneficios = () => {
    return (
      <section className="page-section bg-dark text-white" id="beneficios">
        <div className="container">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">BENEFICIOS</h2>
              <hr className="divider divider-light" />
              <div className="row">
                {/* Beneficio 1 */}
                <div className="col-lg-4 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-headset bi-4x text-success me-3"></i>
                    <div className="text-white">
                      <h4 className="text-white">ASISTENCIA GRATUITA</h4>
                      <p>Te ayudamos a resolver cualquier duda que tengas respecto a la plataforma.</p>
                    </div>
                  </div>
                </div>
                {/* Beneficio 2 */}
                <div className="col-lg-4 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-cash-coin bi-4x text-success me-3"></i>
                    <div className="text-white">
                      <h4 className="text-white">BAJA COMISIÓN</h4>
                      <p>Solo pagas el 10% de comisión sobre el costo del servicio.</p>
                    </div>
                  </div>
                </div>
                {/* Beneficio 3 */}
                <div className="col-lg-4 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-graph-up bi-4x text-success me-3"></i>
                    <div className="text-white">
                      <h4 className="text-white">POSICIONAMIENTO</h4>
                      <p>Aumenta tu visibilidad y alcanza a más clientes.</p>
                    </div>
                  </div>
                </div>
                {/* Beneficio 4 */}
                <div className="col-lg-4 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person-plus bi-4x text-success me-3"></i>
                    <div className="text-white">
                      <h4 className="text-white">CAPTACIÓN DE CLIENTES</h4>
                      <p>Accede a una base de datos de clientes potenciales en búsqueda de grúas.</p>
                    </div>
                  </div>
                </div>
                {/* Beneficio 5 */}
                <div className="col-lg-4 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-clock-history bi-4x text-success me-3"></i>
                    <div className="text-white">
                      <h4 className="text-white">SOPORTE 24/7</h4>
                      <p>Estamos disponibles todo el tiempo para ayudarte.</p>
                    </div>
                  </div>
                </div>
                {/* Beneficio 6 */}
                <div className="col-lg-4 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-shield-lock bi-4x text-success me-3"></i>
                    <div className="text-white">
                      <h4 className="text-white">SEGURIDAD</h4>
                      <p>Garantizamos la seguridad en cada traslado y la verificación de servicios.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Beneficios;
  