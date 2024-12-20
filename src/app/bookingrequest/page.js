'use client';

import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Tooltip,
  Box,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Layout from '../components/layout';

const FullScreenContainer = ({ children }) => (
  <Box
    sx={{
      backgroundImage: `url("/img/4.jpg")`, // Updated background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Full viewport height
      padding: '20px',
      marginTop: '-64px', // Adjusted to offset AppBar height
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}
  >
    {children}
  </Box>
);

function BookingRequests() {
  const [requests, setRequests] = useState([
    { id: 1, name: 'John Doe', service: 'Oil Change', date: '2024-09-21', status: 'Pending' },
    { id: 2, name: 'Jane Smith', service: 'Tire Replacement', date: '2024-09-22', status: 'Pending' },
    { id: 3, name: 'Mike Johnson', service: 'Brake Repair', date: '2024-09-23', status: 'Pending' },
    { id: 4, name: 'Alice Brown', service: 'Battery Replacement', date: '2024-09-24', status: 'Approved' },
  ]);

  const updateStatus = (id, newStatus) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: newStatus } : request
      )
    );
  };

  return (
    <Layout>
      <FullScreenContainer>
        <Container maxWidth="md">
          <Paper
            elevation={4}
            sx={{
              padding: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '12px',
            }}
          >
            <Typography variant="h5" gutterBottom align="center" sx={{ color: '#0288d1', fontWeight: 'bold' }}>
              Booking Requests
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#0288d1' }}>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}><strong>Name</strong></TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}><strong>Service</strong></TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}><strong>Date</strong></TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}><strong>Status</strong></TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}><strong>Actions</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {requests.map((request) => (
                    <TableRow
                      key={request.id}
                      sx={{
                        '&:hover': { backgroundColor: '#e1f5fe' },
                        transition: 'background-color 0.3s',
                      }}
                    >
                      <TableCell align="center" sx={{ color: '#00695c' }}>{request.name}</TableCell>
                      <TableCell align="center" sx={{ color: '#0288d1' }}>{request.service}</TableCell>
                      <TableCell align="center" sx={{ color: '#7b1fa2' }}>{request.date}</TableCell>
                      <TableCell align="center">
                        <Chip
                          label={request.status}
                          color={
                            request.status === 'Pending'
                              ? 'warning'
                              : request.status === 'Approved'
                              ? 'success'
                              : 'error'
                          }
                          variant="outlined"
                          sx={{
                            fontWeight: 'bold',
                            color: request.status === 'Pending' ? '#ffa000' : request.status === 'Approved' ? '#388e3c' : '#d32f2f',
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        {request.status === 'Pending' ? (
                          <>
                            <Tooltip title="Approve">
                              <IconButton
                                color="success"
                                onClick={() => updateStatus(request.id, 'Approved')}
                                sx={{
                                  '&:hover': { backgroundColor: '#388e3c' },
                                  marginRight: 2,
                                }}
                              >
                                <CheckCircleIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Reject">
                              <IconButton
                                color="error"
                                onClick={() => updateStatus(request.id, 'Rejected')}
                                sx={{
                                  '&:hover': { backgroundColor: '#d32f2f' },
                                }}
                              >
                                <CancelIcon />
                              </IconButton>
                            </Tooltip>
                          </>
                        ) : (
                          <Typography variant="body2" color="text.secondary">
                            No Actions
                          </Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
      </FullScreenContainer>
    </Layout>
  );
}

export default BookingRequests;
