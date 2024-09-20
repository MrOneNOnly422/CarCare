'use client';

import React, { useState } from 'react';
import { Container, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box } from '@mui/material';
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
      <Container sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
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
                          <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => handleComplete(order.id)} 
                            sx={{ mr: 1 }}
                          >
                            Mark as Completed
                          </Button>
                          <Button 
                            variant="contained" 
                            color="error" 
                            onClick={() => handleCancel(order.id)}
                          >
                            Cancel Order
                          </Button>
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
    </Layout>
  );
}

export default PendingOrders;
