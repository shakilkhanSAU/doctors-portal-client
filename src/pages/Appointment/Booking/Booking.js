import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;


    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ py: 5 }} elevation={3}>
                    <Typography style={{ fontWeight: 'bold', color: '#2FBFB6' }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography style={{ fontWeight: 'bold' }} variant="p" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography style={{ color: 'crimson' }} variant="caption" display="block" gutterBottom>
                        {space} SPACES AVIALABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} style={{ background: '#2FBFB6', marginTop: '10px' }} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                handleBookingOpen={handleBookingOpen}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                date={date}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;