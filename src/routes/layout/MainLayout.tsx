import { FC } from "react";
// libs
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MenuComponent from "components/Menu/MenuComponent";

const MainLayout: FC = () => {
  return (
    <Layout>
      <MenuComponent />
      <Layout>
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
