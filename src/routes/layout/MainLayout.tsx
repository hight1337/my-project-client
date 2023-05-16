import { FC } from "react";
// libs
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MenuComponent from "components/Menu/MenuComponent";

const { Header, Content } = Layout;

const MainLayout: FC = () => {
  return (
    <Layout>
      <MenuComponent />
      <Layout>
        <Header style={{ backgroundColor: "red" }}>
          <h1>Header</h1>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
