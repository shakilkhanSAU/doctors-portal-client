import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import BannerBottom from '../BannerBottom/BannerBottom';

const bannerBackground = {
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginTop: '20px',
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '600px'
}

const Banner = () => {
    return (
        <>
            <Box style={bannerBackground} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid style={verticalCenter} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }} item xs={12} md={6}>
                        <Container>
                            <Typography variant="h2" style={{ fontWeight: '500' }}>
                                Your New Smile <br></br>
                                Starts Here
                            </Typography>
                            <Typography variant="p" style={{ color: 'gray', fontWeight: 'normal', fontSize: '20px', marginBottom: '5px' }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sunt totam iste modi reprehenderit possimus eos tempora sed tempore veniam.
                            </Typography>
                            <div>
                                <Button style={{ backgroundColor: '#2FBFB6' }} variant="contained">Get Appointment</Button>
                            </div>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: '89%' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Box>
            <BannerBottom></BannerBottom>
        </>
    );
};

export default Banner;