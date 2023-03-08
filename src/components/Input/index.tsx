import { forwardRef } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type IInputProps = {
  label: string;
  message?: string | undefined;
} & TextFieldProps;


const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, type, message, ...rest }, ref) => (
    <fieldset>
      <TextField label={label} type={type} ref={ref} {...rest} />
      <p>{message}</p>
    </fieldset>
  )
);

export default Input;