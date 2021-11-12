import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../SingleService/Service';
import { useState } from 'react';
import { useEffect } from 'react';


const Services = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ mt: 3, fontWeight: 'bold', color: 'success.main' }} variant="h5" component="div">
                OUR SERVICES
            </Typography>
            <Typography sx={{ fontWeight: 'bold', m: 2 }} variant="h3" component="div">
                Services We Provide
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        services?.map((service, index) => <Service
                            key={index}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;