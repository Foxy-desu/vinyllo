import { useState } from 'react';

export type TChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type TSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => void;
export type TValidation = (
  arg0: React.ChangeEvent<HTMLInputElement>,
  arg1: string,
  arg2: string,
) => void;
export type TFormSetData = React.Dispatch<React.SetStateAction<object>>;
export type TValueObj = { username?: string; userpassword?: string };
export type TErrObj = { username?: string; userpassword?: string };
export type TStateValues = [values: TValueObj, setValues: TFormSetData];
export type TStateErrors = [errors: TErrObj, setErrors: TFormSetData];

const useForm = (
  signInCallback: TFormSetData,
  signUpCallback: TFormSetData,
) => {
  const [values, setValues]: TStateValues = useState({});
  const [errors, setErrors]: TStateErrors = useState({});
  const [submitError, setSubmitError] = useState('');

  const handleChange: TChangeHandler = (e) => {
    e.preventDefault();

    let name = e.currentTarget.name;
    let value = e.currentTarget.value;

    validate(e, name, value);

    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate: TValidation = (e, name, value) => {
    switch (name) {
      case 'username':
        if (value.length < 4) {
          setErrors({
            ...errors,
            username: 'Username should have at least 4 characters',
          });
          return;
        }
        if (value.includes(' ')) {
          setErrors({
            ...errors,
            username: 'Username should not include spaces',
          });
          return;
        }
        if (!new RegExp('^[a-zA-Z0-9_-]*$').test(value)) {
          setErrors({
            ...errors,
            username:
              'Username should only contain latin characters, numbers and "-","_" symbols',
          });
          return;
        } else {
          let newObj: TErrObj = { ...errors };
          delete newObj.username;
          setErrors(newObj);
        }
        break;
      case 'userpassword':
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            userpassword:
              'Password should contain atleast 8 charaters, 1 uppercased letter and numbers',
          });
          return;
        } else {
          let newObj: TErrObj = { ...errors };
          delete newObj.userpassword;
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit: TSubmitHandler = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      setSubmitError('');
      const authData = { ...values };
      e.currentTarget.name === 'signUp' && signUpCallback(authData);
      e.currentTarget.name === 'signIn' && signInCallback(authData);
      resetForm();
    } else {
      setSubmitError('Please fill all the fields correctly to continue');
    }
  };

  const resetForm = () => {
    setValues({});
    setErrors({});
  };

  return {
    values,
    errors,
    submitError,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
