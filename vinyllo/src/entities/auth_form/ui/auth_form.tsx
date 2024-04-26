import React from 'react';
import useForm from '../utils/hooks/use_validate';

export type TFormSetData = React.Dispatch<React.SetStateAction<object>>
export type TFormProps = {setSignInData: TFormSetData, setSignUpData: TFormSetData};

export const Form = ({setSignInData, setSignUpData}: TFormProps) => {
    const {handleChange, handleSubmit, values, errors, submitError} = useForm(setSignInData, setSignUpData);
    const [showPassword, setShowPassword] = React.useState(false);

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    };

    return (
        <form>
            {/* User Name input */}
            <label>
                Username:<br/>
                <input type={"text"} name='username' placeholder='John_Doe' value={values.username || ""} onChange={handleChange}/>
            </label><br/>
            {errors.username && <p>{errors.username}</p>}
            {/* Password input */}
            <label>
                Password:<br/>
                <input type={showPassword? "text":"password"} name='userpassword' value={values.userpassword || ""} onChange={handleChange}/>
                {errors.userpassword && <p>{errors.userpassword}</p>}
                {/* Show / Hide password input */}
                <input type="checkbox" title={showPassword? 'hide password':'show password'} onClick={toggleShowPassword}/>
            
            </label><br/>
            {/* SignIn / SignUp btns */}
            <div>
                <input type="submit" name='signIn' value='Sign in' onClick={handleSubmit}/>
                <input type="submit" name='signUp' value='Sign up' onClick={handleSubmit}/>
            </div>
            {submitError && <p>{submitError}</p>}
        </form>
    )
}