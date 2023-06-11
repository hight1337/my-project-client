import { FC } from "react";
// libs
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
// styles
import "./layout.scss";

const AuthLayout: FC = () => {
  return (
    <Layout className="container">
      <Outlet />
    </Layout>
  );
};

export default AuthLayout;
