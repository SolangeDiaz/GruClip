const Servicios = () => {
    return (
      
      <section className="page-section" id="services">
        <div className="container">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">SERVICIOS</h2>
              <hr className="divider divider-light" />
              <div className="row">
                {/* Servicio 1 */}
                <div className="col-lg-6 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-speedometer2 bi-3x text-white me-3" />
                    <p className="text-white mb-0">Acceso a panel de control donde centralizamos tus servicios, clientes y pagos, alertas de solicitudes.</p>
                  </div>
                </div>
                {/* Servicio 2 */}
                <div className="col-lg-6 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-shield-check bi-3x text-white me-3" />
                    <p className="text-white mb-0">Cada servicio que solicite el usuario es verificado y debe contar con una licencia de conducir adecuada y seguro, y el servicio es calificado por los usuarios.</p>
                  </div>
                </div>
                {/* Servicio 3 */}
                <div className="col-lg-6 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-cash-coin bi-3x text-white me-3" />
                    <p className="text-white mb-0">Tu empresa no paga absolutamente nada; el usuario paga el servicio de grúa más la comisión que establecemos de un 10% sobre el costo del servicio.</p>
                  </div>
                </div>
                {/* Servicio 4 */}
                <div className="col-lg-6 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-megaphone bi-3x text-white me-3" />
                    <p className="text-white mb-0">Posicionamos tu marca aún más con nuestras campañas de marketing; en cada campaña destacamos nuestros partners.</p>
                  </div>
                </div>
                {/* Servicio 5 */}
                <div className="col-lg-6 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-wallet2 bi-3x text-white me-3" />
                    <p className="text-white mb-0">Cada usuario paga el servicio y el pago se acredita a tu cuenta según el método de pago que selecciones en nuestra plataforma (Mercado Pago, tarjetas de crédito, débito).</p>
                  </div>
                </div>
                {/* Servicio 6 */}
                <div className="col-lg-6 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-bell bi-3x text-white me-3" />
                    <p className="text-white mb-0">Tu área de empresa cuenta con un sistema de alerta por cada solicitud que ingresa, con la dirección para realizar el traslado.</p>
                  </div>
                </div>
                {/* Servicio 7 */}
                <div className="col-lg-6 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-geo-alt bi-3x text-white me-3" />
                    <p className="text-white mb-0">Geolocalización de tu empresa en un mapa para que cada usuario solicite el servicio más cercano.</p>
                  </div>
                </div>
                {/* Servicio 8 */}
                <div className="col-lg-6 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person-lines-fill bi-3x text-white me-3" />
                    <p className="text-white mb-0">Podrás ver los clientes que solicitaron el servicio, su fecha de pago, solicitudes pendientes o traslados realizados. Traslado programado de traslado y urgencias.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Servicios;
  