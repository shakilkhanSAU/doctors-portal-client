import { Button, Container } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';


import bg from '../../../images/appointment-bg.png'
import { Box } from '@mui/system';

const appointmentBg = {
    background: `url(${bg})`,
    marginTop: '120px',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(30, 47, 96, .7)',
    backgroundBlendMode: 'darken, luminosity'
}

const ContactUs = () => {
    return (
        <Container style={appointmentBg}>
            <Box style={{ padding: '20px' }}>
                <h2 style={{ color: '#2FBFB6', fontSize: '35px' }}>Contact Us</h2>
                <TextField
                    style={{ backgroundColor: 'white', borderRadius: '4px', width: '80%', marginBottom: '15px' }}
                    id="outlined-basic"
                    placeholder="Enter Your Email"
                    type="email"
                    variant="outlined"
                />

                <TextField
                    style={{ backgroundColor: 'white', borderRadius: '4px', width: '80%', marginBottom: '15px' }}
                    id="outlined-basic"
                    placeholder="Subject"
                    variant="outlined"
                />

                <TextField
                    id="outlined-textarea"
                    placeholder="Your Message"
                    multiline
                    rows={4}
                    style={{ backgroundColor: 'white', borderRadius: '4px', width: '80%', marginBottom: '15px' }}
                />
                <Box><Button style={{ backgroundColor: '#2FBFB6' }} variant="contained">Contained</Button></Box>
            </Box>
        </Container>
    );
};

export default ContactUs;