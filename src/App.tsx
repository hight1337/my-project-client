// libs
import { Routes, Route } from "react-router-dom";
import { Space, Spin } from "antd";
// hooks
import { useMe } from "hooks/useMe";
// routes
import { SignIn, SignUp } from "./routes/auth";
import {
  Main,
  AboutUs,
  Gallery,
  MyPosts,
  PostPage,
  Profile,
} from "./routes/main";
import NotFound from "./routes/NotFound";
// layouts
import AuthLayout from "./routes/layout/AuthLayout";
import MainLayout from "./routes/layout/MainLayout";
// constants
import { AUTH_ROUTES, MAIN_ROUTES } from "./constants/routes";

function App() {
  const { isLoading } = useMe();
  if (isLoading) {
    return (
      <Space
        style={{
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Spin size="large" />
      </Space>
    );
  }
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index path={AUTH_ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={AUTH_ROUTES.SIGN_UP} element={<SignUp />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index path={MAIN_ROUTES.HOME} element={<Main />} />
        <Route path={MAIN_ROUTES.MY_POST} element={<MyPosts />} />
        <Route path={MAIN_ROUTES.ABOUT_US} element={<AboutUs />} />
        <Route path={MAIN_ROUTES.GALLERY} element={<Gallery />} />
        <Route path={`${MAIN_ROUTES.POST}/:postId`} element={<PostPage />} />
        <Route path={MAIN_ROUTES.PROFILE} element={<Profile />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
