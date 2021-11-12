import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import bg from '../../../images/footer-bg.png'

const footerBg = {
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

const Footer = () => {
    return (
        <Container style={footerBg} sx={{ flexGrow: 1, mt: 5 }}>
            <Grid style={{ textAlign: 'left' }} container spacing={2}>
                <Grid item xs={6} md={3}>
                    <h2 style={{ color: 'white' }}>'</h2>
                    <Box style={{ fontSize: '19px', fontWeight: '400', color: 'gray' }}>
                        <p>Emergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Teeth Extraction</p>
                        <p>Treatment Personal Diseases</p>
                        <p>Check Up</p>
                        <p>Check Up</p>
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <h2 style={{ color: '#2FBFB6' }}>Services</h2>
                    <Box style={{ fontSize: '19px', fontWeight: '400', color: 'gray' }}>
                        <p>Emergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Teeth Extraction</p>
                        <p>Treatment Personal Diseases</p>
                        <p>Check Up</p>
                    </Box>

                </Grid>
                <Grid item xs={6} md={3}>
                    <h2 style={{ color: '#2FBFB6' }}>Oral Health</h2>
                    <Box style={{ fontSize: '19px', fontWeight: '400', color: 'gray' }}>
                        <p>Emergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Treatment Personal Diseases</p>
                        <p>Teeth Extraction</p>
                        <p>Check Up</p>
                        <p>Check Up</p>
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <h2 style={{ color: '#2FBFB6' }}>Our Address</h2>
                    <Box style={{ fontSize: '19px', fontWeight: '400', color: 'gray' }}>
                        <p>New York , Houstoon Yard -32-001</p>
                        <p style={{ marginBottom: '4px' }}>Call Now</p>
                        <div>
                            <Button style={{ backgroundColor: '#2FBFB6' }} variant="contained">+999 00 22 11 666</Button>
                        </div>
                    </Box>
                </Grid>
            </Grid>
            <p style={{ fontSize: '19px', fontWeight: '500', color: 'gray', marginBottom: '50px' }}>Copyright 2021 All Rights Reserved</p>
        </Container>
    );
};

export default Footer;