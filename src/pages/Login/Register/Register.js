import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import login from '../../../images/login.png'
import { Box } from '@mui/system';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';




const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, error } = useAuth();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(newLoginData)
    }

    const handleLoginSubmit = (e) => {
        if (loginData?.password1 !== loginData?.password2) {
            alert('Your password not matched')
        }
        registerUser(loginData.name, loginData.email, loginData.password1, history);
        if (user.email) {
            setOpen(true);
        }
        e.preventDefault();
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Grid container spacing={2}>
                <Grid style={{ display: 'flex', alignItems: 'center' }} item xs={12} md={6}>
                    <Box style={{ width: '100%' }}>
                        <h3 style={{ fontSize: '33px', color: '#2FBFB6' }}>Create an Account</h3>
                        {
                            !isLoading &&
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    style={{ width: '90%', marginBottom: '25px' }}
                                    id="standard-basic"
                                    label="Your Name"
                                    variant="standard"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    required
                                />
                                <TextField
                                    style={{ width: '90%', marginBottom: '25px' }}
                                    id="standard-basic"
                                    label="Email"
                                    type="email"
                                    variant="standard"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    required
                                />
                                <TextField
                                    style={{ width: '90%', marginBottom: '25px' }}
                                    id="standard-basic"
                                    type="password"
                                    label="Password"
                                    variant="standard"
                                    name="password1"
                                    onBlur={handleOnBlur}
                                    required
                                />
                                <TextField
                                    style={{ width: '90%', marginBottom: '25px' }}
                                    id="standard-basic"
                                    type="password"
                                    label="Re-Enter Password"
                                    variant="standard"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    required
                                />

                                <Box><Button
                                    type="submit"
                                    style={{ width: '90%', padding: '10px', backgroundColor: '#2FBFB6', marginTop: '10px' }} variant="contained">Register</Button></Box>
                            </form>
                        }
                        <div>
                            {
                                isLoading &&
                                <CircularProgress />
                            }
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>

                            {
                                error && <Alert style={{ marginTop: '20px', width: '85%' }} severity="error">{error}</Alert>
                            }
                        </div>
                        <Box
                            style={{ display: 'flex', flexDirection: 'column', paddingTop: '30px' }}
                        >
                            <NavLink
                                style={{ color: 'crimson', marginTop: '-24px', textDecoration: 'none' }}
                                to="/login"
                            >
                                <p>Already Have an Account?</p>
                            </NavLink>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={3000}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your response Submitted!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Register;