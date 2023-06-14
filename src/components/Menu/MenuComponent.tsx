import { FC } from "react";
// libs
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useLocation, useNavigate } from "react-router-dom";
// constants
import { MAIN_ROUTES } from "constants/routes";
// assets
import {
  HomeOutlined,
  SnippetsOutlined,
  PictureOutlined,
  InfoCircleOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  UserOutlined,
} from "@ant-design/icons";
// styles
import "./menu.scss";
// utils
import { menuActiveIndex } from "utils/route-name";

interface IProps {
  menuCollapsed: boolean;
  setMenuCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  collapsedWidth: number;
  setCollapsedWidth: React.Dispatch<React.SetStateAction<number>>;
}

const MenuComponent: FC<IProps> = ({
  menuCollapsed,
  setMenuCollapsed,
  collapsedWidth,
  setCollapsedWidth,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 1,
      }}
      onBreakpoint={(broken) => {
        setCollapsedWidth(broken ? 0 : 80);
      }}
      onMouseOver={() => setMenuCollapsed(false)}
      onMouseLeave={() => setMenuCollapsed(true)}
      collapsed={menuCollapsed}
      onCollapse={(collapsed) => {
        !collapsedWidth && setMenuCollapsed(collapsed);
      }}
    >
      <div className="demo-logo-vertical">
        <img
          src="./assets/logo.png"
          alt="logo"
          className={`logo ${menuCollapsed ? "collapsed" : ""}`}
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[menuActiveIndex(pathname)]}
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: "Home",
            onClick: () => navigate(MAIN_ROUTES.HOME),
          },
          {
            key: "2",
            icon: <SnippetsOutlined />,
            label: "My posts",
            onClick: () => navigate(MAIN_ROUTES.MY_POST),
          },
          {
            key: "3",
            icon: <PictureOutlined />,
            label: "Gallery",
            onClick: () => navigate(MAIN_ROUTES.GALLERY),
          },
          {
            key: "4",
            icon: <UserOutlined />,
            label: "My Profile",
            onClick: () => navigate(MAIN_ROUTES.PROFILE),
          },
          {
            key: "5",
            icon: <InfoCircleOutlined />,
            label: "About us",
            onClick: () => navigate(MAIN_ROUTES.ABOUT_US),
          },
        ]}
      ></Menu>
      <div
        className={`social-menu--wrapper ${menuCollapsed ? "collapsed" : ""} `}
      >
        <div
          className={`social-menu-link--container ${
            menuCollapsed ? "collapsed" : ""
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
