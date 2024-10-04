'use client';

import React, { useState } from 'react';
import { Container, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField, Box, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import Layout from '../components/layout';

function ServicesPage() {
  // State to hold services data
  const [services, setServices] = useState([
    { id: 1, name: 'Oil Change', price: 500 },
    { id: 2, name: 'Brake Inspection', price: 700 },
    { id: 3, name: 'Tire Rotation', price: 300 },
  ]);

  // State to handle adding/editing services
  const [newService, setNewService] = useState({ name: '', price: '' });
  const [editServiceId, setEditServiceId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  // Add new service
  const handleAddService = () => {
    setServices([...services, { ...newService, id: services.length + 1 }]);
    setNewService({ name: '', price: '' });
  };

  // Edit existing service
  const handleEditService = () => {
    setServices(services.map((service) => (service.id === editServiceId ? newService : service)));
    setNewService({ name: '', price: '' });
    setIsEditing(false);
    setEditServiceId(null);
  };

  // Delete a service
  const handleDeleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  // Open the service edit form with selected data
  const handleEditClick = (service) => {
    setNewService({ name: service.name, price: service.price });
    setEditServiceId(service.id);
    setIsEditing(true);
  };

  return (
    <Layout>
      {/* Background Box with background image */}
      <Box
        sx={{
          backgroundImage: `url("/img/1.jpg")`, // Set the background image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          padding: '20px',
        }}
      >
        <Container sx={{ mt: 4 }}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              View/Modify Services
            </Typography>

            {/* Table to display services */}
            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Service Name</TableCell>
                    <TableCell>Price (PHP)</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {services.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell>{service.name}</TableCell>
                      <TableCell>{service.price}</TableCell>
                      <TableCell>
                        <IconButton color="primary" onClick={() => handleEditClick(service)}>
                          <Edit />
                        </IconButton>
                        <IconButton color="error" onClick={() => handleDeleteService(service.id)}>
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Add or Edit Service Form */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6">{isEditing ? 'Edit Service' : 'Add a New Service'}</Typography>
              <TextField
                label="Service Name"
                name="name"
                value={newService.name}
                onChange={handleInputChange}
                fullWidth
                sx={{ mt: 2 }}
              />
              <TextField
                label="Price (PHP)"
                name="price"
                value={newService.price}
                onChange={handleInputChange}
                fullWidth
                sx={{ mt: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={isEditing ? handleEditService : handleAddService}
                disabled={!newService.name || !newService.price}
              >
                {isEditing ? 'Update Service' : 'Add Service'}
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Layout>
  );
}

export default ServicesPage;
