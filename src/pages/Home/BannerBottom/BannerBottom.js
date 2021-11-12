import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Box } from '@mui/system';


const BannerBottom = () => {
    return (
        <Container style={{ marginTop: '-90px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Paper style={{ backgroundColor: '#2EB8B3', color: 'white', padding: '10px' }}>
                            <h3>Openning Hour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing puidem.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper style={{ backgroundColor: '#11444F', color: 'white', padding: '10px' }}>
                            <h3>Visit Our Location</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing puidem.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper style={{ backgroundColor: '#2EB8B3', color: 'white', padding: '10px' }}>
                            <h3>Contact Us Now </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing puidem.</p>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default BannerBottom;