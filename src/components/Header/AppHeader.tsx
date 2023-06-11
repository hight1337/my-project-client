import { FC } from "react";
// libs
import { Avatar, Button, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { useLocation } from "react-router-dom";
// hooks
import { useAppSelector } from "hooks/redux";
import { useLogout } from "hooks/useLogout";
// assets
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
// styles
import "./header.scss";
// utils
import { returnRouteName } from "utils/route-name";
// store
import { userSelector } from "store/user/selectors";

const { Title } = Typography;

const AppHeader: FC = () => {
  const location = useLocation();
  const currentUser = useAppSelector(userSelector);
  const { userLogout } = useLogout();

  return (
    <Header className="app-header">
      <div className="header-container">
        <Title level={3} style={{ margin: 0 }}>
          {returnRouteName(location.pathname)}
        </Title>
        <div className="user-info--container">
          <Title level={5} style={{ margin: 0 }}>
            Hello {currentUser?.firstName}
          </Title>
          <Avatar className="user-avatar" icon={<UserOutlined />} />
          <Button
            type="ghost"
            title="Logout"
            onClick={() => userLogout()}
            style={{ marginLeft: 15 }}
            icon={<LogoutOutlined style={{ fontSize: 21, color: "#f7401c" }} />}
          />
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
