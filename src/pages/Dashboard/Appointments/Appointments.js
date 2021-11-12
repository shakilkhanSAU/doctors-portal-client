import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';


const Appointments = ({ date }) => {
    const { user, token } = useAuth();
    const [appointments, setAppointments] = useState();
    const queryDate = new Date(date).toLocaleDateString();

    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${queryDate}`
        fetch(url, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })

    }, [queryDate, user.email, token])
    return (
        <div>
            <h2>Appointments {appointments?.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="appointments data table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name of Patient</TableCell>
                            <TableCell align="right">Service Name</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments?.map((appointment) => (
                            <TableRow
                                key={appointment.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {appointment.patientName}
                                </TableCell>
                                <TableCell align="right">{appointment.serviceName}</TableCell>
                                <TableCell align="right">{appointment.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;