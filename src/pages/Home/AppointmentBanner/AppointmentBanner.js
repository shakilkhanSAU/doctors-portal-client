import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import { Button, Container, Typography } from '@mui/material';
import bg from '../../../images/appointment-bg.png'

const appointmentBg = {
    background: `url(${bg})`,
    marginTop: '120px',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(30, 47, 96, .7)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Container style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '450px', marginTop: '-140px', marginBottom: '-4px' }} src={doctor} alt="" />
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography varient="h6" style={{ color: '#2E9B95', fontSize: '23px', fontWeight: 'bold' }}>
                            APPOINTMENT
                        </Typography>
                        <Typography varient="h3" style={{ color: 'white', fontSize: '37px', fontWeight: 'bold' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography varient="h3" style={{ color: 'lightgray', fontSize: '18px', fontWeight: 'light', margin: '10px 30px 10px 0' }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat pariatur similique tenetur eos quasi recusandae neque? Repellendus fugiat molestiae veritatis?
                        </Typography>
                        <div>
                            <Button style={{ backgroundColor: '#2FBFB6' }} variant="contained">Learn More</Button>
                        </div>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentBanner;