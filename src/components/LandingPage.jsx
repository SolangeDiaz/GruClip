// App.jsx
import Sidebar from './Sidebar';
import Header from './Header';
import About from './About';
import VideoSection from './VideoSection';
import Beneficios from './Beneficios';
import Servicios from './Servicios';
import Contact from './Contact';
import SocialLinks from './SocialLinks';
import Footer from './Footer';
import Banner from './Logo';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from '../CarouselComponent';

function LandingPage() {
  return (
    <div>  
      <Sidebar />
      <CarouselComponent/>
    <Header/>
    <About />
    <VideoSection />
    <Servicios/>
    <Beneficios />
    <Contact />
    <SocialLinks />
    <Banner/>
    <Footer />
    </div>
  );
}

export default LandingPage;
