// libs
import { Routes, Route } from "react-router-dom";
// routes
import { SignIn, SignUp } from "./routes/auth";
import { Main } from "./routes/main";
import NotFound from "./routes/NotFound";
// layouts
import AuthLayout from "./routes/layout/AuthLayout";
import MainLayout from "./routes/layout/MainLayout";
// constants
import { AUTH_ROUTES, MAIN_ROUTES } from "./constants/routes";

function App() {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />}>
        <Route index path={AUTH_ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={AUTH_ROUTES.SIGN_UP} element={<SignUp />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index path={MAIN_ROUTES.HOME} element={<Main />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
