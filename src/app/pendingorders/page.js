'use client';

import React, { useState } from 'react';
import { Container, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Box } from '@mui/material';
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
              Pending Orders
            </Typography>

            {/* Table to display pending orders */}
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Customer</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>{order.quantity}</TableCell>
                      <TableCell>{order.status}</TableCell>
                      <TableCell>
                        {order.status === 'Pending' && (
                          <>
                            <IconButton
                              color="primary"
                              onClick={() => handleComplete(order.id)}
                              sx={{ mr: 1 }}
                            >
                              <CheckCircleIcon />
                            </IconButton>
                            <IconButton
                              color="error"
                              onClick={() => handleCancel(order.id)}
                            >
                              <CancelIcon />
                            </IconButton>
                          </>
                        )}
                        {order.status !== 'Pending' && (
                          <Typography>{order.status}</Typography>
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
