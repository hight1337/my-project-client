import { FC } from "react";
// libs
import { Avatar, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { useLocation } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
// styles
import "./header.scss";
// utils
import { returnRouteName } from "utils/route-name";

const { Title } = Typography;

const AppHeader: FC = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Header className="app-header">
      <div className="header-container">
        {/* Here will be info about user {name,image} */}
        <Title level={3} style={{ margin: 0 }}>
          {returnRouteName(location.pathname)}
        </Title>
        <div className="user-info--container">
          <Title level={5} style={{ margin: 0 }}>
            Hello UserName!
          </Title>
          <Avatar className="user-avatar" icon={<UserOutlined />} />
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
