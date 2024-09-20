'use client';

import React, { useState } from 'react';
import { Container, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box } from '@mui/material';
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
      <Container sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
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
                          <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => handleApprove(request.id)} 
                            sx={{ mr: 1 }}
                          >
                            Approve
                          </Button>
                          <Button 
                            variant="contained" 
                            color="error" 
                            onClick={() => handleReject(request.id)}
                          >
                            Reject
                          </Button>
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
    </Layout>
  );
}

export default BookingRequests;
