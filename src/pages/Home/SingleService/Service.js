import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const Service = (props) => {
    const { img, name, description } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{
                minWidth: 275,
                boxShadow: 0,
                border: 0
            }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '100px', margin: '1px auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        <h3>{name}</h3>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;