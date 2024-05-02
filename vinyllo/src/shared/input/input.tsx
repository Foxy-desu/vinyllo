import * as React from 'react';
import TextField from '@mui/material/TextField';

type TInputProps = {
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  error?: string;
  children?: any;
};

export default function AuthInput({
  type,
  name,
  placeholder,
  value,
  onChange,
  label,
  children,
}: TInputProps) {
  const childNodes = React.Children.map(children, (child) => child);
  return (
    <TextField
      variant="standard"
      size="small"
      label={label}
      required
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment: childNodes,
      }}
    />
  );
}
