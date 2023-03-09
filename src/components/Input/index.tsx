import { forwardRef } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { StyledFieldSet } from "./styles";

type IInputProps = {
  label: string;
  message?: string | undefined;
} & TextFieldProps;

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, type, message, ...rest }, ref) => (
    <StyledFieldSet>
      <TextField label={label} type={type} ref={ref} {...rest} />
      <p>{message}</p>
    </StyledFieldSet>
  )
);

export default Input;
