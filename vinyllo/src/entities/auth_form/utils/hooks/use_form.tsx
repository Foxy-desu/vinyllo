import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser, registerUser } from '../../../../app/store/user_slice';

export type TChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type TSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => void;
export type TValidation = (
  arg0: React.ChangeEvent<HTMLInputElement>,
  arg1: string,
  arg2: string,
) => void;
export type TFormSetData = React.Dispatch<React.SetStateAction<object>>;
export type TValueObj = { email?: string; password?: string };
export type TErrObj = { email?: string; password?: string };
export type TStateValues = [values: TValueObj, setValues: TFormSetData];
export type TStateErrors = [errors: TErrObj, setErrors: TFormSetData];

const useForm = () => {
  const [values, setValues]: TStateValues = useState({});
  const [errors, setErrors]: TStateErrors = useState({});
  const [submitError, setSubmitError] = useState('');
  // const dispatch: any = useDispatch();

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
      case 'email':
        if (!new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(value)) {
          setErrors({
            ...errors,
            email:
              'Enter valid user email',
          });
          return;
        } else {
          let newObj: TErrObj = { ...errors };
          delete newObj.email;
          setErrors(newObj);
        }
        break;
      case 'password':
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              'Password should contain atleast 8 charaters, 1 uppercased letter and numbers',
          });
          return;
        } else {
          let newObj: TErrObj = { ...errors };
          delete newObj.password;
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  // const handleSubmit: TSubmitHandler = (e) => {
  //   e.preventDefault();
  //   if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
  //     setSubmitError('');
  //     const userCredentials = { ...values, albums:[], favorites:[]};
  //     e.currentTarget.name === 'signUp' && dispatch(registerUser(userCredentials));
  //     e.currentTarget.name === 'signIn' && dispatch(loginUser(userCredentials));
  //     resetForm();
  //   } else {
  //     setSubmitError('Please fill all the fields correctly to continue');
  //   }
  // };

  // const resetForm = () => {
  //   setValues({});
  //   setErrors({});
  // };

  return {
    values,
    setValues,
    errors,
    setErrors,
    setSubmitError,
    submitError,
    handleChange,
    // handleSubmit,
  };
};

export default useForm;
