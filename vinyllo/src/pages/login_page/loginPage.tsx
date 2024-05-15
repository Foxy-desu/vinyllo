import React, { useEffect } from "react";
import {Box, Container, Typography} from "@mui/material";
import { AuthForm } from "../../entities/auth_form/api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginPage = ({setUser}:{setUser:any}) => {

    const {user} = useSelector((state: any)=> state.user);
    const navigate = useNavigate();
    
    useEffect(() =>{
        const storedUser = localStorage.getItem('user');
        if(storedUser) {
            storedUser && setUser(JSON.parse(storedUser));
            navigate('/')
        }
    },[user])

    return (
        <Container sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h1">
                Vinyllo
            </Typography>
            <Box component="section">
                <Typography variant="h2">
                    Hello there!
                </Typography>
                <Typography component="p">
                    Log in or create a new account to keep your vinyl records
                </Typography>
                <Box component="div">
                    <AuthForm/>
                </Box>
            </Box>
        </Container>
    )
};
export default LoginPage;