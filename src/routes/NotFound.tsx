import { FC } from "react";
// libs
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
// constants
import { MAIN_ROUTES } from "constants/routes";

const NotFound: FC = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(MAIN_ROUTES.HOME, { replace: true });
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={handleBackHome} type="primary">
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
