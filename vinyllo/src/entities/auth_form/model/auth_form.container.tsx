import React from "react";
import { Form } from "../ui/auth_form";

// TODO: implement authentification method for signIn state change
// TODO: implement registration method for signUp state change
// TODO: as soon as the user is created or found in the DB, redirect them to the main page.

export const FormContainer = () => {
    const [signInData, setSignInData] = React.useState({});
    const [signUpData, setSignUpData] = React.useState({});

    React.useEffect(()=> {
        Object.keys(signUpData).length > 0 && console.log('sign up:' + JSON.stringify(signUpData));
    },[signUpData])

    React.useEffect(()=> {
        Object.keys(signInData).length > 0 && console.log('sign in:' + JSON.stringify(signInData));
    },[signInData])

    return <Form setSignInData={setSignInData} setSignUpData={setSignUpData}/>
     
}