import { FC } from "react";
// libs
import { Space, Typography } from "antd";
// assets
import { PhoneOutlined } from "@ant-design/icons";
// styles
import "./about-us.scss";

const { Title, Paragraph, Text } = Typography;

const AboutUs: FC = () => {
  return (
    <div className="about-us--container">
      <div className="about-us--section">
        <Title level={2}>About Us</Title>
        <Paragraph className="about-us--paragraph">
          Welcome to <b>University News</b>, your ultimate source for the latest
          news and updates from <b>University News</b>. Our web application is
          dedicated to keeping the entire <b>University News</b> community
          informed, engaged, and connected.
        </Paragraph>
        <Paragraph className="about-us--paragraph">
          At <b>University News</b>, our mission is to provide timely, accurate,
          and comprehensive coverage of all the happenings within our esteemed
          university. We believe that staying informed is essential for
          fostering a sense of belonging and promoting a vibrant campus culture.
        </Paragraph>
        <Paragraph className="about-us--paragraph">
          With a dedicated team of passionate writers and journalists, we strive
          to bring you the most compelling stories, noteworthy events, and
          insightful features that reflect the diverse interests and
          achievements of our university community. Our team is composed of
          students, faculty members, and alumni who share a common goal: to
          celebrate and showcase the excellence and accomplishments that make
          <b> University News</b> truly exceptional.
        </Paragraph>
        <Paragraph className="about-us--paragraph">
          Since our inception in 2023, we have become a trusted platform for
          delivering news and updates to active users, including students,
          faculty, staff, and alumni. Our commitment to providing reliable
          information has earned us a reputation for being the go-to source for
          all things <b> University News</b>-related.
        </Paragraph>
        <Paragraph className="about-us--paragraph">
          We understand the importance of transparency and accuracy in
          journalism. That's why we adhere to rigorous journalistic standards
          and ensure that every news article, opinion piece, and feature story
          goes through a thorough fact-checking and editing process. Our
          dedication to integrity and ethical reporting is paramount in
          delivering news that you can trust.
        </Paragraph>
        <Paragraph className="about-us--paragraph">
          In addition to news coverage, we also provide a platform for the
          <b> University News</b> community to voice their opinions, share their
          experiences, and engage in meaningful discussions. We believe in the
          power of dialogue and the ability of diverse perspectives to enrich
          our collective understanding.
        </Paragraph>
        <Paragraph className="about-us--paragraph">
          As a student project for <b>University News</b>, our web application
          is continuously evolving and improving. We value your feedback and
          encourage you to actively participate in shaping the future of our
          platform. Together, we can create a vibrant and inclusive space for
          sharing news and fostering connections within our university
          community.
        </Paragraph>
        <Paragraph className="about-us--paragraph">
          Thank you for joining us on this exciting journey. Stay informed, stay
          connected, and let's celebrate the stories that make
          <b> University News</b> thrive.
        </Paragraph>
      </div>
      <div className="about-us-contacts--section">
        <Title level={2}>Contacts</Title>
        <Space direction="vertical">
          <Space>
            <PhoneOutlined className="about-us--phone" />
            <Text className="about-us--phone">+380 50 123 4567</Text>
          </Space>
          <Space>
            <PhoneOutlined className="about-us--phone" />
            <Text className="about-us--phone">+380 67 987 6543</Text>
          </Space>
        </Space>
      </div>
    </div>
  );
};

export default AboutUs;
