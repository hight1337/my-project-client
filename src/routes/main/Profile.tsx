import { FC } from "react";
// hooks
import { useAppSelector } from "hooks/redux";
// selectors
import { userSelector } from "store/user/selectors";
import { Avatar, Layout, Space } from "antd";
// assets
import { UserOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";

const Profile: FC = () => {
  const currentUser = useAppSelector(userSelector);
  return (
    <Layout>
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center", marginTop: 50 }}
      >
        <Avatar
          shape="square"
          style={{ backgroundColor: "#87d068" }}
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 150, xxl: 250 }}
          icon={<UserOutlined />}
        />
        <Space
          direction="vertical"
          style={{ width: "100%", justifyContent: "center", marginLeft: 50 }}
        >
          <Title level={3}>{`First Name: ${currentUser?.firstName}`}</Title>
          <Title level={3}>{`Last Name: ${currentUser?.lastName}`}</Title>
          <Title level={3}>{`Email: ${currentUser?.email}`}</Title>
        </Space>
      </Space>
    </Layout>
  );
};

export default Profile;
