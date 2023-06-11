import { FC } from "react";
// libs
import { Button, Typography } from "antd";
import { useForm } from "react-hook-form";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
// hooks
import { useAppDispatch } from "hooks/redux";
// api
import { userSignUp } from "services/auth";
// store
import { setUser } from "store/user/reducers";
// components
import MainInput from "../../components/MainInput/MainInput";
// constants
import { USER_ACCESS_TOKEN } from "constants/local-sorage";
// routes
import { AUTH_ROUTES, MAIN_ROUTES } from "../../constants/routes";
// types
import { AxiosError } from "axios";
// queries
import { AUTH_QUERIES } from "constants/queries";
// styles
import "./auth.scss";
// utils
import {
  EMAIL_VALIDATION,
  FIRST_NAME_VALIDATION,
  LAST_NAME_VALIDATION,
  PASSWORD_VALIDATION,
} from "../../utils/validation-rules";
import { showErrorNotification } from "utils/notifications";
import { setItemToLocalStorage } from "utils/local-storage";

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

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, mutate } = useMutation(AUTH_QUERIES.SIGN_UP, userSignUp, {
    onSuccess: (data) => {
      const { user } = data;
      dispatch(setUser(user));
      setItemToLocalStorage(USER_ACCESS_TOKEN, data.accessToken);
      navigate(MAIN_ROUTES.HOME, { replace: true });
    },
    onError: (error: AxiosError<AxiosError>) => {
      showErrorNotification(error.response?.data.message);
    },
  });
  const onSubmit = (data: ISignUpForm) => {
    mutate(data);
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
        loading={isLoading}
        block
        onClick={handleSubmit(onSubmit)}
      >
        Sign Up
      </Button>
      <div className="sign-up-container">
        <Title level={5} style={{ marginBottom: 0 }}>
          You already have an account?
        </Title>
        <Link to={AUTH_ROUTES.SIGN_IN} className="sign-up-link">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
