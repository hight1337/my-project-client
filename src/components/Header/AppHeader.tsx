import { FC } from "react";
// libs
import { Avatar, Button, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { useLocation, useNavigate } from "react-router-dom";
// hooks
import { useAppSelector } from "hooks/redux";
import { useLogout } from "hooks/useLogout";
// routes
import { MAIN_ROUTES } from "constants/routes";
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
  const navigate = useNavigate();
  const currentUser = useAppSelector(userSelector);
  const { userLogout } = useLogout();
  const shouldShowUserInfoSection = location.pathname !== MAIN_ROUTES.PROFILE;
  return (
    <Header className="app-header">
      <div className="header-container">
        <Title level={3} style={{ margin: 0 }}>
          {returnRouteName(location.pathname)}
        </Title>
        <div className="user-info--container">
          {shouldShowUserInfoSection && (
            <>
              <Title level={5} style={{ margin: 0 }}>
                Hello {currentUser?.firstName}
              </Title>
              <Avatar
                onClick={() => navigate(MAIN_ROUTES.PROFILE)}
                className="user-avatar"
                icon={<UserOutlined />}
              />
            </>
          )}

          <Button
            type="default"
            title="Logout"
            danger
            onClick={() => userLogout()}
            style={{ marginLeft: 15 }}
            icon={<LogoutOutlined />}
          >
            Logout
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
