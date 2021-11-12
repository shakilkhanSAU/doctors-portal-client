import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

import user1 from '../../../images/people-1.png'
import user2 from '../../../images/people-2.png'
import user3 from '../../../images/people-3.png'
import { Box } from '@mui/system';


const Testimonial = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
            <Box sx={{ mt: 5 }}>
                <Typography style={{ fontWeight: 500, textAlign: 'left', color: '#2FBFB6' }} variant="h6" gutterBottom component="div">
                    TESTIMONIAL
                </Typography>
                <Typography style={{ fontWeight: 500, textAlign: 'left' }} variant="h3" gutterBottom component="div">
                    What's Our Patients <br></br> Says
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 4 }}>
                        <div style={{ fontSize: '18px', color: 'gray', textAlign: 'justify' }}>
                            <p>Thank you for all being so kind and making this a great experience.” “What a great experience. It's not often you go to the dentist and absolutely nothing is uncomfortable. I came in with an extremely painful tooth and jaw and never felt any pain or discomfort during the procedure.</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                            <div>
                                <img style={{ width: '60px' }} src={user1} alt="" />
                            </div>
                            <div style={{ paddingLeft: '10px' }}>
                                <Typography style={{ marginBottom: '-5px', fontWeight: 'bold', color: '#2FBFB6' }} variant="subtitle1" gutterBottom component="div">
                                    Micale Mike
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom component="div">
                                    Canada
                                </Typography>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 4 }}>
                        <div style={{ fontSize: '18px', color: 'gray', textAlign: 'justify' }}>
                            <p>Thank you for all being so kind and making this a great experience.” “What a great experience. It's not often you go to the dentist and absolutely nothing is uncomfortable. I came in with an extremely painful tooth and jaw and never felt any pain or discomfort during the procedure.</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                            <div>
                                <img style={{ width: '60px' }} src={user2} alt="" />
                            </div>
                            <div style={{ paddingLeft: '10px' }}>
                                <Typography style={{ marginBottom: '-5px', fontWeight: 'bold', color: '#2FBFB6' }} variant="subtitle1" gutterBottom component="div">
                                    Rebeca Jinnah
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom component="div">
                                    Canada
                                </Typography>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 4 }}>
                        <div style={{ fontSize: '18px', color: 'gray', textAlign: 'justify' }}>
                            <p>Thank you for all being so kind and making this a great experience.” “What a great experience. It's not often you go to the dentist and absolutely nothing is uncomfortable. I came in with an extremely painful tooth and jaw and never felt any pain or discomfort during the procedure.</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                            <div>
                                <img style={{ width: '60px' }} src={user3} alt="" />
                            </div>
                            <div style={{ paddingLeft: '10px' }}>
                                <Typography style={{ marginBottom: '-5px', fontWeight: 'bold', color: '#2FBFB6' }} variant="subtitle1" gutterBottom component="div">
                                    Micale Mike
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom component="div">
                                    Canada
                                </Typography>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Testimonial;