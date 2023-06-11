import { FC } from "react";
// libs
import { Typography, Input } from "antd";
import { Controller, LiteralUnion, RegisterOptions } from "react-hook-form";
// styles
import "./main-input.scss";

const { Text } = Typography;
interface IMainInputProps {
  inputLabel: string;
  inputName: string;
  inputPlaceholder: string;
  inputPrefixIcon?: JSX.Element;
  inputType: LiteralUnion<"email" | "password" | "text", string>;
  allowClear?: boolean;
  autoFocus?: boolean;
  control: any;
  validationRules: RegisterOptions;
  errorText: string | undefined;
}

const MainInput: FC<IMainInputProps> = ({
  inputLabel,
  inputName,
  inputPlaceholder,
  inputPrefixIcon,
  inputType,
  allowClear,
  autoFocus,
  validationRules,
  errorText,
  control,
}) => {
  return (
    <div className="input-container">
      <Text>{`${inputLabel}:`}</Text>
      {inputType === "password" ? (
        <Controller
          name={inputName}
          control={control}
          rules={validationRules}
          render={({ field }) => (
            <Input.Password
              {...field}
              size="large"
              name={inputName}
              placeholder={inputPlaceholder}
              prefix={inputPrefixIcon}
              allowClear={allowClear}
              autoFocus={autoFocus}
              status={errorText ? "error" : ""}
            />
          )}
        />
      ) : (
        <Controller
          name={inputName}
          control={control}
          rules={validationRules}
          render={({ field }) => (
            <Input
              {...field}
              size="large"
              name={inputName}
              placeholder={inputPlaceholder}
              prefix={inputPrefixIcon}
              allowClear={allowClear}
              type={inputType}
              autoFocus={autoFocus}
              status={errorText ? "error" : ""}
            />
          )}
        />
      )}
      <Text
        type="danger"
        className={`error-text ${errorText ? "error-text--visible" : ""}`}
      >
        {errorText}
      </Text>
    </div>
  );
};

export default MainInput;
