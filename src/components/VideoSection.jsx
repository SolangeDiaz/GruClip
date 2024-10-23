import videoSrc from '../assets/video-listo.mp4'; 
import { useNavigate } from 'react-router-dom';

const VideoSection = () => {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    // Navegación a la página de registro o inicio de sesión
    navigate('Registro');
  };

  return (
    <section className="page-section bg-dark text-white">
      <div
        className="video-container"
        style={{
          position: 'relative',
          paddingTop: '56.25%',
          overflow: 'hidden',
          cursor: 'pointer' 
        }}
        onClick={handleVideoClick} // manejador de clic en el div
      >
        <video
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            filter: 'brightness(95%)'
          }}
          autoPlay
          muted
          loop
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Texto superpuesto sobre el video */}
        <div
          className="video-text"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white'
          }}
        >
          <p>Conecta con nosotros y maximiza el flujo de clientes.</p>

          {/* Botón visible para registrarse */}
         <div className="btn btn-primary btn-xl">REGISTRARME
         </div>
         
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
