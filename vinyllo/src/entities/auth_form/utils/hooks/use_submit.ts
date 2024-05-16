//TODO: add navigation between login and main page
//TODO: add check for user in local storage (exists - load main page, doesn't exist - load login page)
//TODO: get all user info on main page
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TSubmitHandler } from "./use_form";
import { createUserObjOnLogin, createUserObjOnReg } from "../helpers/user_object_creators";
import { loginUser, registerUser } from "../../../../app/store/user_slice";
import { resetForm } from "../../api";
import { TFormSetData } from "../../ui/auth_form";

export type TUseSubmitProps = {errors: object, setErrors: TFormSetData, values: object, setValues: TFormSetData};

const useSubmit = ({values, setValues, errors, setErrors}:TUseSubmitProps) => {

    const [stopClick, setStopClick] = React.useState(true);
    const {loading, error} = useSelector((state: any)=> state.user);
    const dispatch = useDispatch();

    const signUp = () => {
        const userCredentials = createUserObjOnReg(values);
        dispatch(registerUser(userCredentials));
    };
    const signIn = () => {
        const userCredentials = createUserObjOnLogin(values);
        dispatch(loginUser(userCredentials));
    };
    const handleSubmit: TSubmitHandler = (e) => {
        e.preventDefault();
        setStopClick(true);

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            e.currentTarget.name === 'signUp' && signUp();
            e.currentTarget.name === 'signIn' && signIn();
            error || resetForm(setValues, setErrors);
        }
    };
    
    React.useEffect(() => {
        if (Object.keys(errors).length === 0 && Object.keys(values).length === 2 && !loading) {
            setStopClick(false);
            console.log(values)
        } 
        else {
            setStopClick(true);
        }
    }, [errors, loading]);

    return { handleSubmit, stopClick, loading, error };
};

export default useSubmit;

