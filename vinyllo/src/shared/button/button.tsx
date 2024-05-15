import React from 'react';
import { Button } from '@mui/material';
import { TSubmitHandler } from '../../entities/auth_form/utils/hooks/use_form';

export type TAuthBtnProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  value?: string;
  name?: string;
  onClick?: TSubmitHandler;
  prohibitClick?: true | false;
};
export type TAuthButton = (props: TAuthBtnProps) => JSX.Element;

const AuthButton: TAuthButton = ({
  value,
  name,
  type,
  onClick,
  prohibitClick,
}) => {
  return prohibitClick ? (
    <Button
      variant={'outlined'}
      name={name}
      type={type}
      onClick={onClick}
      disabled
    >
      {value}
    </Button>
  ) : (
    <Button
      variant={'outlined'}
      name={name}
      type={type}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

export default AuthButton;
