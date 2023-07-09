import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage/HomePage';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import { RegisterPage } from '../Pages/RegisterPage/RegisterPage';
import { RenderPage } from '../Pages/RenderPage/RenderPage';
import { ProtectedRoute } from '../Components/ProtectedRoute/ProtectedRout';

export const RoutesMain = () => {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element ={<ProtectedRoute/>}>
          <Route path="/registerPage" element={<RegisterPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
        </Route>
        <Route path="/renderPage" element={<RenderPage />} />
      </Routes>

  );
};
