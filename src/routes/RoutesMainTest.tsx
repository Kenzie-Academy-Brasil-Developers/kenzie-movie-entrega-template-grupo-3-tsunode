
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage/HomePage';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import { RegisterPage } from '../Pages/RegisterPage/RegisterPage';

export const RoutesMain = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/renderPage" element={<RenderPage />}/>
      </Routes>
    </Router>
  );
};
