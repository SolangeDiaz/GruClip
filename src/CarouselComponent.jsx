// CarouselComponent.jsx
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import grua from './assets/grua.jpg'
import grua1 from './assets/grua1.jpg';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grua}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Somos GRUCLIP</h1>
          <h2>Te brindamos una idea de negocio nueva en el mercado</h2>
        </Carousel.Caption>
      </Carousel.Item>

  
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grua1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Sin riesgo de inversion</h1>
          <h2>Costo minimo</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
