import { FC } from "react";
// libs
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
// components
import MenuComponent from "components/Menu/MenuComponent";
import AppHeader from "components/Header/AppHeader";

const { Content } = Layout;

const MainLayout: FC = () => {
  return (
    <Layout>
      <MenuComponent />
      <Layout>
        <AppHeader />
        <Content className="content-container">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
