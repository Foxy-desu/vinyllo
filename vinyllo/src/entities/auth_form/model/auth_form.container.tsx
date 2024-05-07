import { Form } from '../ui/auth_form';
import useForm from '../utils/hooks/use_form';
import useSubmit from '../utils/hooks/use_submit';

// TODO: as soon as the user is created or found in the DB, redirect them to the main page.

export const FormContainer = () => {
  const { handleChange, values, setValues, errors, setErrors } = useForm();
  const {handleSubmit, stopClick, loading, error} = useSubmit({values, setValues, errors, setErrors});

  return (
    <Form
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      stopClick={stopClick}
      responsePending={loading}
      requestError={error}
    />
  );
};
