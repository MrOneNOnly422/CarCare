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
const mockOrderHistory = [
  { id: 1, customer: 'John Doe', orderDate: '2024-12-10', total: '$150.00', status: 'Delivered' },
  { id: 2, customer: 'Jane Smith', orderDate: '2024-12-12', total: '$75.00', status: 'Processing' },
  { id: 3, customer: 'Alex Brown', orderDate: '2024-12-14', total: '$120.00', status: 'Cancelled' },
];

const ViewOrderHistory = () => {
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
              Order History
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="order history table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#3f51b5' }}>
                    <TableCell sx={{ color: 'white' }}><strong>ID</strong></TableCell>
                    <TableCell sx={{ color: 'white' }}><strong>Customer</strong></TableCell>
                    <TableCell sx={{ color: 'white' }}><strong>Order Date</strong></TableCell>
                    <TableCell sx={{ color: 'white' }}><strong>Total</strong></TableCell>
                    <TableCell sx={{ color: 'white' }}><strong>Status</strong></TableCell>
                    <TableCell sx={{ color: 'white' }}><strong>Action</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockOrderHistory.map((order) => (
                    <TableRow key={order.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' }, '&:hover': { backgroundColor: '#ddd' } }}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.orderDate}</TableCell>
                      <TableCell>{order.total}</TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          sx={{
                            color: order.status === 'Delivered' ? 'green' : order.status === 'Processing' ? 'orange' : 'red',
                          }}
                        >
                          {order.status}
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

export default ViewOrderHistory;
