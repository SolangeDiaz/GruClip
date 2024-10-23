

import { Routes, Route } from 'react-router-dom';
import IniciarSesion from '../components/IniciarSesion'; // Página de inicio de sesión
import LandingPage from '../components/LandingPage';
import RecuperarContrasena from '../components/RecuperarContrasena';
import Registro from '../components/Registro';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />

      <Route path="/IniciarSesion" element={<IniciarSesion />} />
      <Route path="/RecuperarContrasena" element={<RecuperarContrasena />} />
      <Route path="/Registro" element={<Registro/>} />

    </Routes>
  );
};

export default AppRoutes;
