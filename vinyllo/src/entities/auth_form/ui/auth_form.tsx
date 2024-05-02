import React from 'react';
import AuthInput from '../../../shared/input/input';
import { AuthButton } from '../../../shared/button/button';
import { Stack } from '@mui/material';
import { VisibilityCheckBox } from '../../../shared/visibility_checkbox/visibility_checkbox';
import {
  TChangeHandler,
  TErrObj,
  TSubmitHandler,
  TValueObj,
} from '../utils/hooks/use_form';

export type TFormSetData = React.Dispatch<React.SetStateAction<object>>;
export type TFormProps = {
  setSignInData?: TFormSetData;
  setSignUpData?: TFormSetData;
  values: TValueObj;
  errors: TErrObj;
  handleChange: TChangeHandler;
  handleSubmit: TSubmitHandler;
  stopClick: boolean;
};

export const Form = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  stopClick,
}: TFormProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <form>
      <Stack direction="row">
        <Stack direction="column">
          <AuthInput
            label="Username"
            type={'text'}
            name="username"
            placeholder="John_Doe"
            value={values.username || ''}
            error={errors.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
          <AuthInput
            label="Password"
            type={showPassword ? 'text' : 'password'}
            name="userpassword"
            value={values.userpassword || ''}
            error={errors.userpassword}
            onChange={handleChange}
          >
            <VisibilityCheckBox
              showPassword={showPassword}
              onClick={toggleShowPassword}
            />
          </AuthInput>
          {errors.userpassword && <p>{errors.userpassword}</p>}
        </Stack>
      </Stack>

      {/* SignIn / SignUp btns */}
      <Stack
        spacing={2}
        direction="row"
      >
        <AuthButton
          type="button"
          name="signIn"
          value={'Sign In'}
          onClick={handleSubmit}
          prohibitClick={stopClick}
        />
        <AuthButton
          type="button"
          name="signUp"
          value={'Sign Up'}
          onClick={handleSubmit}
          prohibitClick={stopClick}
        />
      </Stack>
    </form>
  );
};
