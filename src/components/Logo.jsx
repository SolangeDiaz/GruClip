import bannerImage from '../assets/banner.png'; // Asegúrate de importar tu imagen de banner correctamente

const Banner = () => {
  return (
    <div className="position-cover" style={{ width: "100%", height: "20vh", overflow: "hidden" }}>
      <img
        src={bannerImage}
        alt="gruclip"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Banner;
