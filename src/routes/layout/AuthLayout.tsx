import { FC, useEffect } from "react";
// libs
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout } from "antd";
// routes
import { AUTH_ROUTES } from "../../constants/routes";
// styles
import "./layout.scss";

const AuthLayout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthRoute =
    location.pathname === `/auth/${AUTH_ROUTES.SIGN_IN}` ||
    location.pathname === `/auth/${AUTH_ROUTES.SIGN_UP}`;

  useEffect(() => {
    if (!isAuthRoute) {
      navigate(AUTH_ROUTES.SIGN_IN);
    }
  }, [isAuthRoute, navigate]);

  return (
    <Layout className="container">
      <Outlet />
    </Layout>
  );
};

export default AuthLayout;
