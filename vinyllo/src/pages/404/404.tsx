import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Typography variant="h1">
            The page does not exist: 404
            </Typography>
            <Button onClick={() => navigate("/")}>Back to Main</Button>
        </>
    )
};

export default Page404;