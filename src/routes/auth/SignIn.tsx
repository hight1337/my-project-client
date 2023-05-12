import { FC } from "react";
// libs
import { Button, Typography, Space } from "antd";
import { Link } from "react-router-dom";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
// components
import MainInput from "../../components/MainInput/MainInput";
// routes
import { AUTH_ROUTES } from "../../constants/routes";
// styles
import "./auth.scss";

// utils
import {
  EMAIL_VALIDATION,
  PASSWORD_VALIDATION,
} from "../../utils/validation-rules";

const { Title } = Typography;

interface ISignInForm {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>({
    mode: "onSubmit",
  });

  const onSubmit = (data: ISignInForm) => {
    console.log("data", data);
  };

  return (
    <Space direction="vertical">
      <Title level={1}>Welcome to the React Boilerplate</Title>
      <div className="form-container">
        <Title level={3}>Sign In</Title>
        <MainInput
          inputLabel="Email"
          inputName="email"
          inputPlaceholder="example@example.com"
          inputPrefixIcon={<MailOutlined />}
          allowClear
          autoFocus
          validationRules={EMAIL_VALIDATION}
          inputType="email"
          errorText={errors.email?.message}
          control={control}
        />
        <MainInput
          inputLabel="Password"
          inputName="password"
          inputPlaceholder="Password"
          inputPrefixIcon={<LockOutlined />}
          allowClear
          validationRules={PASSWORD_VALIDATION}
          inputType="password"
          errorText={errors.password?.message}
          control={control}
        />
        <Button
          type="primary"
          size="large"
          className="sign-in-button"
          block
          onClick={handleSubmit(onSubmit)}
        >
          Sign In
        </Button>
        <div className="sign-up-container">
          <Title level={5} style={{ marginBottom: 0 }}>
            Don't have account?
          </Title>
          <Link to={`/auth/${AUTH_ROUTES.SIGN_UP}`} className="sign-up-link">
            Sign Up
          </Link>
        </div>
      </div>
    </Space>
  );
};

export default SignIn;
