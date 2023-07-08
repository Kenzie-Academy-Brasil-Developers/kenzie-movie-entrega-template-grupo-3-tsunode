import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage/RegisterPage";
import { RenderPage } from "../Pages/RenderPage/RenderPage";
import { useAuth } from "./Auth";

const PrivateRoute = ({
  element,
  path,
}: {
  element: JSX.Element;
  path: string;
}) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/loginPage" />;
  }

  return <Route path={path} element={element} />;
};

export const RoutesMain = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route
          path="/renderPage"
          element={<PrivateRoute path="/renderPage" element={<RenderPage />} />}
        />
      </Routes>
    </Router>
  );
};
