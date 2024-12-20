'use client';

import Layout from '../components/layout'; // Import your custom Layout
import React, { useState } from 'react';
import {
  Stepper, Step, StepLabel, Button, Typography, Box, Container,
  TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, ListItemText, OutlinedInput
} from '@mui/material';

const steps = ['Enter Details', 'Select Payment Method', 'Review & Confirm'];

const paymentMethods = ['Credit/Debit Card', 'GCash', 'Cash'];

const PlaceOrder = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [details, setDetails] = useState({ name: '', address: '', phone: '' });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleCancel = () => {
    setActiveStep(0);
    setDetails({ name: '', address: '', phone: '' });
    setPaymentMethod('');
  };

  const handleDetailsChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Layout>
      {/* Background Image Container */}
      <Box
        sx={{
          backgroundImage: 'url("/img/1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        {/* Confined Content Box */}
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Place Order
          </Typography>

          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Content of Each Step */}
          {activeStep === steps.length ? (
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography variant="h6">Order Confirmed!</Typography>
              <Typography>Your order has been placed successfully.</Typography>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleCancel}>
                  Place Another Order
                </Button>
              </Box>
            </Box>
          ) : (
            <Box sx={{ mt: 4 }}>
              {/* Step 1: Enter Details */}
              {activeStep === 0 && (
                <Box>
                  <TextField
                    label="Name"
                    name="name"
                    value={details.name}
                    onChange={handleDetailsChange}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Address"
                    name="address"
                    value={details.address}
                    onChange={handleDetailsChange}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Phone Number"
                    name="phone"
                    value={details.phone}
                    onChange={handleDetailsChange}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Box>
              )}

              {/* Step 2: Select Payment Method */}
              {activeStep === 1 && (
                <FormControl fullWidth>
                  <InputLabel>Select Payment Method</InputLabel>
                  <Select
                    value={paymentMethod}
                    onChange={handlePaymentChange}
                    label="Select Payment Method"
                  >
                    {paymentMethods.map((method) => (
                      <MenuItem key={method} value={method}>
                        {method}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              {/* Step 3: Review & Confirm */}
              {activeStep === 2 && (
                <Box>
                  <Typography variant="h6">Review Your Order</Typography>
                  <Typography><strong>Name:</strong> {details.name}</Typography>
                  <Typography><strong>Address:</strong> {details.address}</Typography>
                  <Typography><strong>Phone:</strong> {details.phone}</Typography>
                  <Typography><strong>Payment Method:</strong> {paymentMethod}</Typography>
                </Box>
              )}

              {/* Buttons */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={
                    (activeStep === 0 && (!details.name || !details.address || !details.phone)) ||
                    (activeStep === 1 && !paymentMethod)
                  }
                >
                  {activeStep === steps.length - 1 ? 'Confirm Order' : 'Next'}
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default PlaceOrder;
