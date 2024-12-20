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
  Box,
  Chip,
  Tooltip,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Layout from '../components/layout';

function PendingOrders() {
  // Sample pending orders data
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', product: 'Engine Oil', quantity: 2, status: 'Pending' },
    { id: 2, customer: 'Jane Smith', product: 'Brake Pads', quantity: 1, status: 'Pending' },
    { id: 3, customer: 'Mike Johnson', product: 'Car Battery', quantity: 1, status: 'Pending' },
  ]);

  // Handle mark as completed action
  const handleComplete = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: 'Completed' } : order
    );
    setOrders(updatedOrders);
  };

  // Handle cancel order action
  const handleCancel = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: 'Cancelled' } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: `url("/img/4.jpg")`, // Updated image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensures full height covers the viewport
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          marginTop: '-64px', // Adjust for AppBar height if necessary
        }}
      >
        <Container>
          <Paper elevation={6} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 3 }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: '#00695c' }}>
              Pending Orders
            </Typography>

            <TableContainer component={Paper} elevation={3}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#0288d1' }}>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}><strong>Customer</strong></TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}><strong>Product</strong></TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}><strong>Quantity</strong></TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}><strong>Status</strong></TableCell>
                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}><strong>Actions</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow
                      key={order.id}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#e1f5fe',
                        },
                      }}
                    >
                      <TableCell align="center" sx={{ color: '#00695c' }}>{order.customer}</TableCell>
                      <TableCell align="center" sx={{ color: '#0288d1' }}>{order.product}</TableCell>
                      <TableCell align="center" sx={{ color: '#7b1fa2' }}>{order.quantity}</TableCell>
                      <TableCell align="center">
                        <Chip
                          label={order.status}
                          color={
                            order.status === 'Pending'
                              ? 'primary'
                              : order.status === 'Completed'
                              ? 'success'
                              : 'error'
                          }
                          variant="filled"
                          sx={{ fontWeight: 'bold' }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        {order.status === 'Pending' ? (
                          <>
                            <Tooltip title="Mark as Completed">
                              <IconButton
                                color="success"
                                onClick={() => handleComplete(order.id)}
                                sx={{ marginRight: 2, '&:hover': { backgroundColor: '#388e3c' } }}
                              >
                                <CheckCircleIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Cancel Order">
                              <IconButton
                                color="error"
                                onClick={() => handleCancel(order.id)}
                                sx={{ '&:hover': { backgroundColor: '#d32f2f' } }}
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
      </Box>
    </Layout>
  );
}

export default PendingOrders;
