import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { HomePage } from '../Pages/HomePage/HomePage';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import { RegisterPage } from '../Pages/RegisterPage/RegisterPage';
import { RenderPage } from '../Pages/RenderPage/RenderPage';

import { ProtectedRoute } from '../Components/ProtectedRoute/ProtectedRoute';

export const RoutesMain = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/renderPage" element={<RenderPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/registerPage" element={<RegisterPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
