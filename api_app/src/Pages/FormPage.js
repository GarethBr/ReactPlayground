import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
//Material UI imports
import {
    Box,
    Button,
    TextField,
} from '@mui/material';

export const FormPage = () => {
    let navigate = useNavigate();
    
 

    return(
        <Box>
            <p>Hi</p>
            <p>Hi</p>
            <Box className="backBtn">
                    <Button size="large" variant="contained" onClick={(e) => navigate("/")}>Back  to Dashboard</Button>
            </Box>
        </Box>
    )

}

export default FormPage;