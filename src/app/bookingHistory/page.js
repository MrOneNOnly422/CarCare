'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  TableSortLabel,
} from '@mui/material';
import Layout from '../components/layout';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

// Mock data
const mockBookingHistory = [
  { id: 1, customer: 'John Doe', date: '2024-12-15', service: 'Engine Check', status: 'Completed' },
  { id: 2, customer: 'Jane Smith', date: '2024-12-16', service: 'Oil Change', status: 'Pending' },
  { id: 3, customer: 'Alex Brown', date: '2024-12-17', service: 'Tire Replacement', status: 'In Progress' },
];

const ViewBookingHistory = () => {
  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: `url("/img/3.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          padding: '20px',
          marginTop: '-64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Container maxWidth="lg">
          <Paper elevation={4} sx={{ padding: '30px', backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Booking History
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="booking history table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#3f51b5' }}>
                    <TableCell sx={{ color: 'white' }}><strong>ID</strong></TableCell>
                    <TableCell sx={{ color: 'white' }}><strong>Customer</strong></TableCell>
                    <TableCell sx={{ color: 'white' }}><strong>Date</strong></TableCell>
                    <TableCell sx={{ color: 'white' }}><strong>Service</strong></TableCell>
                    <TableCell sx={{ color: 'white' }}><strong>Status</strong></TableCell>
                    <TableCell sx={{ color: 'white' }}><strong>Action</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockBookingHistory.map((booking) => (
                    <TableRow key={booking.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' }, '&:hover': { backgroundColor: '#ddd' } }}>
                      <TableCell>{booking.id}</TableCell>
                      <TableCell>{booking.customer}</TableCell>
                      <TableCell>{booking.date}</TableCell>
                      <TableCell>{booking.service}</TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          sx={{
                            color: booking.status === 'Completed' ? 'green' : booking.status === 'Pending' ? 'orange' : 'blue',
                          }}
                        >
                          {booking.status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Button variant="contained" color="primary" sx={{ mr: 2 }}>View Details</Button>
                        <IconButton color="error">
                          <MoreVertIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
      </Box>
    </Layout>
  );
};

export default ViewBookingHistory;
