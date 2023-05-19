import { FC, useState } from "react";
// libs
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
// components
import MenuComponent from "components/Menu/MenuComponent";
import AppHeader from "components/Header/AppHeader";

const { Content } = Layout;

const MainLayout: FC = () => {
  const [menuCollapsed, setMenuCollapsed] = useState<boolean>(true);
  const [collapsedWidth, setCollapsedWidth] = useState<number>(80);
  return (
    <Layout>
      <MenuComponent
        menuCollapsed={menuCollapsed}
        setMenuCollapsed={setMenuCollapsed}
        collapsedWidth={collapsedWidth}
        setCollapsedWidth={setCollapsedWidth}
      />
      <Layout
        style={{
          marginLeft: menuCollapsed ? 80 : 200,
          transition: "all ease-out 0.2s",
        }}
      >
        <AppHeader />
        <Content className="content-container">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
