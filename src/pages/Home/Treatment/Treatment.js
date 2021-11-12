import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png'
import { Button, Typography } from '@mui/material';

const Treatment = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 3, mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '500px' }} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                    <div style={{ paddingRight: '20px' }}>
                        <Typography style={{ fontWeight: '500' }} variant="h3" gutterBottom component="div">
                            Exceptional Dental Care, <br />
                            on Your Term
                        </Typography>
                        <Typography style={{ fontSize: '20px', color: 'gray', paddingBottom: '20px', textAlign: 'justify' }} variant="p" gutterBottom component="div">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure minima expedita itaque natus. Quos enim repellat vero, nesciunt quo nisi, odio perferendis iusto atque ipsa, accusamus ut. Natus, vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos accusamus asperiores delectus suscipit at quia assumenda ipsam nobis dolore repellat?
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </div>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Treatment;