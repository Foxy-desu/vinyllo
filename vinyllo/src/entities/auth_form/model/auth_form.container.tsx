import Form from '../ui/auth_form';
import useForm from '../utils/hooks/use_form';
import useSubmit from '../utils/hooks/use_submit';

const FormContainer = () => {
  const { handleChange, values, setValues, errors, setErrors } = useForm();
  const {handleSubmit, stopClick, loading, error: submitError} = useSubmit({values, setValues, errors, setErrors});

  return (
    <Form
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      stopClick={stopClick}
      responsePending={loading}
      submitError={submitError}
    />
  );
};

export default FormContainer;
