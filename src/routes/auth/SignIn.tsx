import { FC } from "react";
// libs
import { Button, Typography, Space, Image } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
// api
import { userSignIn } from "services/auth";
// hooks
import { useAppDispatch } from "hooks/redux";
// store
import { setUser } from "store/user/reducers";
// components
import MainInput from "../../components/MainInput/MainInput";
// routes
import { AUTH_ROUTES, MAIN_ROUTES } from "../../constants/routes";
// queries
import { AUTH_QUERIES } from "constants/queries";
// styles
import "./auth.scss";
// types
import { AxiosError } from "axios";
// utils
import {
  EMAIL_VALIDATION,
  PASSWORD_VALIDATION,
} from "../../utils/validation-rules";
// constants
import { USER_ACCESS_TOKEN } from "constants/local-sorage";
// utils
import { showErrorNotification } from "utils/notifications";
import { setItemToLocalStorage } from "utils/local-storage";

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

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(AUTH_QUERIES.SIGN_IN, userSignIn, {
    onSuccess: (data) => {
      const { user } = data;
      setItemToLocalStorage(USER_ACCESS_TOKEN, data.accessToken);
      dispatch(setUser(user));
      navigate(MAIN_ROUTES.HOME, { replace: true });
    },
    onError: (error: AxiosError<AxiosError>) => {
      showErrorNotification(error.response?.data.message);
    },
  });

  const onSubmit = (data: ISignInForm) => {
    mutate(data);
  };

  return (
    <Space direction="vertical">
      <Space
        direction="vertical"
        style={{ alignItems: "center", width: "100%", marginBottom: 50 }}
      >
        <Image src="./assets/logo.png" width={150} preview={false} />
        <Title level={1}>Your University News</Title>
      </Space>

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
          loading={isLoading}
          block
          onClick={handleSubmit(onSubmit)}
        >
          Sign In
        </Button>
        <div className="sign-up-container">
          <Title level={5} style={{ marginBottom: 0 }}>
            Don't have an account?
          </Title>
          <Link to={AUTH_ROUTES.SIGN_UP} className="sign-up-link">
            Sign Up
          </Link>
        </div>
      </div>
    </Space>
  );
};

export default SignIn;
