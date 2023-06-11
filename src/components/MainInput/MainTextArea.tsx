import React, { FC } from "react";
// libs
import { Typography, Input } from "antd";
// styles
import "./main-input.scss";
// types
import { Controller, RegisterOptions } from "react-hook-form";

const { Text } = Typography;
const { TextArea } = Input;

interface IProps {
  control: any;
  validationRules: RegisterOptions;
  errorText: string | undefined;
  inputLabel: string;
  inputName: string;
  inputPlaceholder: string;
  minRows?: number;
  maxRows?: number;
  allowClear?: boolean;
  autoFocus?: boolean;
}
const MainTextArea: FC<IProps> = ({
  inputLabel,
  control,
  validationRules,
  inputName,
  inputPlaceholder,
  minRows = 1,
  maxRows = 6,
  allowClear = true,
  autoFocus = false,
  errorText,
}) => {
  return (
    <div className="input-container">
      <Text>{`${inputLabel}:`}</Text>
      <Controller
        control={control}
        name={inputName}
        rules={validationRules}
        render={({ field }) => (
          <TextArea
            {...field}
            name={inputName}
            allowClear={allowClear}
            autoFocus={autoFocus}
            placeholder={inputPlaceholder}
            autoSize={{ minRows: minRows, maxRows: maxRows }}
            status={errorText ? "error" : ""}
          />
        )}
      />
      <Text
        type="danger"
        className={`error-text ${errorText ? "error-text--visible" : ""}`}
      >
        {errorText}
      </Text>
    </div>
  );
};

export default MainTextArea;
