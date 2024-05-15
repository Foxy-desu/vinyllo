import React from 'react';
import AuthInput from '../../../shared/input/input';
import { AuthButton } from '../../../shared/api';
import { Stack } from '@mui/material';
import { VisibilityCheckBox } from '../../../shared/api';
import {
  TChangeHandler,
  TErrObj,
  TSubmitHandler,
  TValueObj,
} from '../api';
import { useNavigate } from 'react-router-dom';

export type TFormSetData = React.Dispatch<React.SetStateAction<object>>;
export type TFormProps = {
  setSignInData?: TFormSetData;
  setSignUpData?: TFormSetData;
  values: TValueObj;
  errors: TErrObj;
  handleChange: TChangeHandler;
  handleSubmit: TSubmitHandler;
  stopClick: boolean;
  responsePending: boolean,
  submitError: any;
};

const Form = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  stopClick,
  responsePending,
  submitError,
}: TFormProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <>
    {responsePending && <div>Please, wait...</div>}
    <form>
      <Stack direction="row">
        <Stack direction="column">
          <AuthInput
            label="Email"
            type={'text'}
            name="email"
            placeholder="test@example.com"
            value={values.email || ''}
            error={errors.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <AuthInput
            label="Password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={values.password || ''}
            error={errors.password}
            onChange={handleChange}
          >
            <VisibilityCheckBox
              showPassword={showPassword}
              onClick={toggleShowPassword}
            />
          </AuthInput>
          {errors.password && <p>{errors.password}</p>}
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
      {submitError && <p>{submitError}</p>}
    </form>
    </>
  );
};

export default Form;
