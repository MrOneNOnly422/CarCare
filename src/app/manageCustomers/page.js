'use client'

import React, { useState } from 'react';
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
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import Layout from '../components/layout';

const mockCustomers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '098-765-4321' },
];

const ManageCustomers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Handle checkbox change to select a customer
  const handleCheckboxChange = (id) => {
    setSelectedCustomer((prev) => (prev === id ? null : id)); // Toggle selection
  };

  // Check details handler
  const handleCheckDetails = () => {
    alert(`Showing details for customer ${selectedCustomer}`);
  };

  // Delete user handler
  const handleDeleteUser = () => {
    alert(`Deleting customer ${selectedCustomer}`);
  };

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
          <Paper elevation={5} sx={{ padding: '30px', backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
              Manage Customers
            </Typography>

            <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Select</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockCustomers.map((customer) => (
                    <TableRow
                      key={customer.id}
                      sx={{
                        '&:hover': { backgroundColor: '#f5f5f5' },
                        transition: 'background-color 0.3s ease',
                      }}
                    >
                      <TableCell>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={selectedCustomer === customer.id}
                              onChange={() => handleCheckboxChange(customer.id)}
                            />
                          }
                          label=""
                        />
                      </TableCell>
                      <TableCell>{customer.id}</TableCell>
                      <TableCell>{customer.name}</TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>{customer.phone}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={handleCheckDetails}
                          disabled={!selectedCustomer || selectedCustomer !== customer.id}
                          sx={{ mr: 1 }}
                        >
                          Check Details
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          onClick={handleDeleteUser}
                          disabled={!selectedCustomer || selectedCustomer !== customer.id}
                        >
                          Delete User
                        </Button>
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

export default ManageCustomers;
