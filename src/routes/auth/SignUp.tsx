import { FC } from "react";
// libs
import { Button, Typography } from "antd";
import { useForm } from "react-hook-form";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
// components
import MainInput from "../../components/MainInput/MainInput";
// styles
import "./auth.scss";
// utils
import {
  EMAIL_VALIDATION,
  FIRST_NAME_VALIDATION,
  LAST_NAME_VALIDATION,
  PASSWORD_VALIDATION,
} from "../../utils/validation-rules";
import { Link } from "react-router-dom";
import { AUTH_ROUTES } from "../../constants/routes";

interface ISignUpForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const { Title } = Typography;

const SignUp: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({
    mode: "onSubmit",
  });

  const onSubmit = (data: ISignUpForm) => {
    console.log("data", data);
  };
  return (
    <div className="form-container">
      <Title level={3}>Sign Up</Title>
      <MainInput
        inputLabel="First Name"
        inputName="firstName"
        inputPlaceholder="John"
        inputPrefixIcon={<UserOutlined />}
        allowClear
        autoFocus
        validationRules={FIRST_NAME_VALIDATION}
        inputType="text"
        errorText={errors.firstName?.message}
        control={control}
      />
      <MainInput
        inputLabel="Last Name"
        inputName="lastName"
        inputPlaceholder="Doe"
        inputPrefixIcon={<UserOutlined />}
        allowClear
        validationRules={LAST_NAME_VALIDATION}
        inputType="text"
        errorText={errors.lastName?.message}
        control={control}
      />
      <MainInput
        inputLabel="Email"
        inputName="email"
        inputPlaceholder="example@example.com"
        inputPrefixIcon={<MailOutlined />}
        allowClear
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
        Sign Up
      </Button>
      <div className="sign-up-container">
        <Title level={5} style={{ marginBottom: 0 }}>
          You already have an account?
        </Title>
        <Link to={`/auth/${AUTH_ROUTES.SIGN_IN}`} className="sign-up-link">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
