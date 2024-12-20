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
      {/* Fullscreen Background Box with image */}
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
        <Container sx={{ mt: 4 }}>
          <Paper elevation={4} sx={{ p: 3, borderRadius: 2, backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#0288d1', fontWeight: 'bold' }}>
              View/Modify Services
            </Typography>

            {/* Table to display services */}
            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#0288d1' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Service Name</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Price (PHP)</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {services.map((service) => (
                    <TableRow key={service.id} sx={{ '&:hover': { backgroundColor: '#f1f1f1' } }}>
                      <TableCell>{service.name}</TableCell>
                      <TableCell>{service.price}</TableCell>
                      <TableCell>
                        <IconButton color="primary" onClick={() => handleEditClick(service)} sx={{ '&:hover': { backgroundColor: '#0288d1' } }}>
                          <Edit />
                        </IconButton>
                        <IconButton color="error" onClick={() => handleDeleteService(service.id)} sx={{ '&:hover': { backgroundColor: '#d32f2f' } }}>
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
              <Typography variant="h6" sx={{ color: '#008080' }}>
                {isEditing ? 'Edit Service' : 'Add a New Service'}
              </Typography>
              <TextField
                label="Service Name"
                name="name"
                value={newService.name}
                onChange={handleInputChange}
                fullWidth
                sx={{ mt: 2 }}
                color="primary"
              />
              <TextField
                label="Price (PHP)"
                name="price"
                value={newService.price}
                onChange={handleInputChange}
                fullWidth
                sx={{ mt: 2 }}
                color="primary"
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, width: '100%' }}
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
