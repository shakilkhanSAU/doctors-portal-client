import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '4px',
    boxShadow: 22,
    p: 4,
};



const BookingModal = ({ handleBookingClose, openBooking, booking, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();
    const initialBookingInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingInfo = { ...bookingInfo }
        newBookingInfo[field] = value;
        setBookingInfo(newBookingInfo)
    }

    const handleBookSubmit = (e) => {
        e.preventDefault();
        // collect data
        const appointment = {
            ...booking, ...bookingInfo,
            time,
            serviceName: name,
            email: user.email,
            date: date.toLocaleDateString()
        }
        // send data to server
        fetch('https://desolate-thicket-66517.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(appointment)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleBookingClose()
                }
            })
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookSubmit}>
                        <TextField
                            id="outlined-basic"
                            label="Your Name"
                            variant="outlined"
                            defaultValue={user.displayName}
                            name="patientName"
                            onBlur={handleOnBlur}
                            sx={{ width: '100%', mb: 1, mt: 1 }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Your Email"
                            variant="outlined"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            sx={{ width: '100%', mb: 1, mt: 1 }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Your Phone Number"
                            variant="outlined"
                            name="phone"
                            onBlur={handleOnBlur}
                            sx={{ width: '100%', mb: 1, mt: 1 }}
                        />
                        <TextField
                            disabled
                            id="outlined-basic"
                            label="Appointment Date"
                            defaultValue={date?.toDateString()}
                            variant="outlined"
                            sx={{ width: '100%', mb: 1, mt: 1 }}
                        />
                        <TextField
                            disabled
                            id="outlined-basic"
                            label="Select Your Time"
                            defaultValue={time}
                            variant="outlined"
                            sx={{ width: '100%', mb: 1, mt: 1 }}
                        />
                        <Button variant="contained" type="submit">Book Now</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;