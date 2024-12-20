'use client';

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

const mockMechanics = [
  { id: 1, name: 'Alex Johnson', email: 'alex.johnson@example.com', phone: '987-654-3210', shopName: 'Nelson Automotive' },
  { id: 2, name: 'Sam Wilson', email: 'sam.wilson@example.com', phone: '654-321-0987', shopName: 'AutoFix Garage' },
];

const ManageMechanics = () => {
  const [selectedMechanic, setSelectedMechanic] = useState(null);

  // Handle checkbox change to select a mechanic
  const handleCheckboxChange = (id) => {
    setSelectedMechanic((prev) => (prev === id ? null : id)); // Toggle selection
  };

  // Check details handler
  const handleCheckDetails = () => {
    alert(`Showing details for mechanic ${selectedMechanic}`);
  };

  // Delete mechanic handler
  const handleDeleteMechanic = () => {
    alert(`Deleting mechanic ${selectedMechanic}`);
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
              Manage Mechanics
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
                    <TableCell sx={{ fontWeight: 'bold' }}>Shop Name</TableCell> {/* New column */}
                    <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockMechanics.map((mechanic) => (
                    <TableRow
                      key={mechanic.id}
                      sx={{
                        '&:hover': { backgroundColor: '#f5f5f5' },
                        transition: 'background-color 0.3s ease',
                      }}
                    >
                      <TableCell>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={selectedMechanic === mechanic.id}
                              onChange={() => handleCheckboxChange(mechanic.id)}
                            />
                          }
                          label=""
                        />
                      </TableCell>
                      <TableCell>{mechanic.id}</TableCell>
                      <TableCell>{mechanic.name}</TableCell>
                      <TableCell>{mechanic.email}</TableCell>
                      <TableCell>{mechanic.phone}</TableCell>
                      <TableCell>{mechanic.shopName}</TableCell> {/* New column for Shop Name */}
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={handleCheckDetails}
                          disabled={!selectedMechanic || selectedMechanic !== mechanic.id}
                          sx={{ mr: 1 }}
                        >
                          Check Details
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          onClick={handleDeleteMechanic}
                          disabled={!selectedMechanic || selectedMechanic !== mechanic.id}
                        >
                          Delete Mechanic
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

export default ManageMechanics;
