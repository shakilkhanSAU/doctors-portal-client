import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, Snackbar } from '@mui/material';
import TextField from '@mui/material/TextField';
import login from '../../../images/login.png'
import { Box } from '@mui/system';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { signinUser, googleSignIn, error, isLoading } = useAuth();
    const [open, setOpen] = React.useState(false);
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        signinUser(loginData?.email, loginData?.password, location, history);
        setOpen(true);
    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, history)
    }

    const handleClose = (reason) => {
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
                        <h3 style={{ fontSize: '33px', color: '#2FBFB6' }}>Log in</h3>
                        {
                            !isLoading && <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    style={{ width: '90%', marginBottom: '25px' }}
                                    id="standard-basic"
                                    label="Email"
                                    variant="standard"
                                    name="email"
                                    onChange={handleOnChange}
                                    required
                                />
                                <TextField
                                    style={{ width: '90%', marginBottom: '25px' }}
                                    id="standard-basic"
                                    type="password"
                                    label="Password"
                                    variant="standard"
                                    name="password"
                                    onChange={handleOnChange}
                                    required
                                />

                                <Box><Button
                                    type="submit"
                                    style={{ width: '90%', padding: '10px', backgroundColor: '#2FBFB6', marginTop: '10px' }} variant="contained">Sign In</Button></Box>
                            </form>

                        }
                        <div>
                            <Button onClick={handleGoogleSignIn}>Google Signin</Button>
                        </div>
                        <div sx={{ mt: 5 }}>
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
                        <Box style={{ display: 'flex', flexDirection: 'column', paddingTop: '30px' }}>
                            <NavLink style={{ color: 'crimson', marginTop: '-24px' }} to="/register">
                                <p>Are You New User?</p>
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

export default Login;