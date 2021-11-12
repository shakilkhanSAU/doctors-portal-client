import { Container } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import Calendar from '../../shared/Calendar/Calendar';

const AppointmentDate = ({ date, setDate }) => {

    return (
        <Container style={{ paddingTop: '30px', paddingBottom: '30px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default AppointmentDate;