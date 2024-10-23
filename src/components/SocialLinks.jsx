// SocialLinks.jsx

const SocialLinks = () => {
  return (
    <div className="social-links" style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
      {/* Links de redes sociales aquí */}
      <div className="social-links" style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
        <div style={{ textAlign: 'center', margin: '0 15px' }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="src\assets\icons8-facebook-50.png" alt="Facebook" style={{ width: '30px' }} />
          </a>
          <p>Facebook</p>
        </div>
        <div style={{ textAlign: 'center', margin: '0 15px' }}>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="src\assets\icons8-twitterx-50.png" alt="Twitter" style={{ width: '30px' }} />
          </a>
          <p>Twitter</p>
        </div>
        <div style={{ textAlign: 'center', margin: '0 15px' }}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="src\assets\icons8-instagram-50.png" alt="Instagram" style={{ width: '30px' }} />
          </a>
          <p>Instagram</p>
        </div>
        {/* Agrega más enlaces a redes sociales según sea necesario */}
      </div>
    </div>
  );
};

export default SocialLinks;
