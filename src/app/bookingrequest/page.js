'use client';

import React, { useState } from 'react';
import { Container, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Layout from '../components/layout';

function BookingRequests() {
  // Sample booking requests data
  const [requests, setRequests] = useState([
    { id: 1, name: 'John Doe', service: 'Oil Change', date: '2024-09-21', status: 'Pending' },
    { id: 2, name: 'Jane Smith', service: 'Tire Replacement', date: '2024-09-22', status: 'Pending' },
    { id: 3, name: 'Mike Johnson', service: 'Brake Repair', date: '2024-09-23', status: 'Pending' },
  ]);

  // Handle approve and reject actions
  const handleApprove = (id) => {
    const updatedRequests = requests.map((req) => 
      req.id === id ? { ...req, status: 'Approved' } : req
    );
    setRequests(updatedRequests);
  };

  const handleReject = (id) => {
    const updatedRequests = requests.map((req) => 
      req.id === id ? { ...req, status: 'Rejected' } : req
    );
    setRequests(updatedRequests);
  };

  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: `url("/img/1.jpg")`, // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <Container sx={{ mt: 4 }}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <Typography variant="h5" gutterBottom>
              Booking Requests
            </Typography>

            {/* Table to display booking requests */}
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Service</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {requests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>{request.name}</TableCell>
                      <TableCell>{request.service}</TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell>{request.status}</TableCell>
                      <TableCell>
                        {request.status === 'Pending' && (
                          <>
                            <IconButton
                              color="primary"
                              onClick={() => handleApprove(request.id)}
                              sx={{ mr: 1 }}
                            >
                              <CheckCircleIcon />
                            </IconButton>
                            <IconButton
                              color="error"
                              onClick={() => handleReject(request.id)}
                            >
                              <CancelIcon />
                            </IconButton>
                          </>
                        )}
                        {request.status !== 'Pending' && (
                          <Typography>{request.status}</Typography>
                        )}
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
}

export default BookingRequests;
