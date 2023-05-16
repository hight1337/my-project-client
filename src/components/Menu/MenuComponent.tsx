import { FC, useState } from "react";
// libs
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
// assets
import {
  HomeOutlined,
  SnippetsOutlined,
  PictureOutlined,
  InfoCircleOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
// styles
import "./menu.scss";

const MenuComponent: FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [collapsedWidth, setCollapsedWidth] = useState(80);

  const onInstagramClick = () => {
    window.open("https://www.instagram.com/", "_blank");
  };
  const onLinkedinClick = () => {
    window.open("https://www.linkedin.com/", "_blank");
  };
  const onFacebookClick = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth={collapsedWidth}
      style={{
        minHeight: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 1,
      }}
      onBreakpoint={(broken) => {
        setCollapsedWidth(broken ? 0 : 80);
      }}
      onMouseOver={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      collapsed={collapsed}
      onCollapse={(collapsed) => {
        !collapsedWidth && setCollapsed(collapsed);
      }}
    >
      <div className="demo-logo-vertical">
        <img
          src="./assets/logo.png"
          alt="logo"
          className={`logo ${collapsed ? "collapsed" : ""}`}
        />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item icon={<HomeOutlined />} key="1">
          Home
        </Menu.Item>
        <Menu.Item icon={<SnippetsOutlined />} key="2">
          My posts
        </Menu.Item>
        <Menu.Item icon={<PictureOutlined />} key="3">
          Gallery
        </Menu.Item>
        <Menu.Item icon={<InfoCircleOutlined />} key="4">
          About us
        </Menu.Item>
      </Menu>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          padding: "20px 25px",
          width: "100%",
          maxWidth: 200,
        }}
      >
        <div
          className={`social-menu-link--container ${
            collapsed ? "collapsed" : ""
          }`}
        >
          <InstagramOutlined
            className="social-menu-link"
            onClick={onInstagramClick}
          />
          <LinkedinOutlined
            className="social-menu-link"
            onClick={onLinkedinClick}
          />
          <FacebookOutlined
            className="social-menu-link"
            onClick={onFacebookClick}
          />
        </div>
      </div>
    </Sider>
  );
};

export default MenuComponent;
