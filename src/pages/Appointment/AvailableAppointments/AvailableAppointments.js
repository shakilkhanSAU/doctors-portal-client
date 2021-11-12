import { Container, Grid, Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const timeSlots = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '11.00 AM - 11.30 AM',
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 4,
        name: 'Orthopedics Sergery',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 5,
        name: 'City Scan',
        time: '09.00 AM - 10.00 AM',
        space: 10
    },
    {
        id: 6,
        name: 'Cavity Protection',
        time: '07.00 AM - 08.00 AM',
        space: 10
    },
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setBookingSuccess(false);


    };
    return (
        <Container>
            <h2>Available Appointments on <span style={{ color: '#2FBFB6' }}>{date.toDateString()}</span></h2>
            <Grid container spacing={2}>
                {
                    timeSlots.map(timeSlot => <Booking
                        key={timeSlot.id}
                        booking={timeSlot}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
            <Snackbar open={bookingSuccess} autoHideDuration={3000}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Booking Submitted Successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default AvailableAppointments;