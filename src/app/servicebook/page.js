'use client';

import Layout from '../components/layout'; // Import your custom Layout
import React, { useState } from 'react';
import {
  Stepper, Step, StepLabel, Button, Typography, Box, Container,
  TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, ListItemText, OutlinedInput
} from '@mui/material';


const steps = ['Select Mechanic/Shop', 'Select Service(s)', 'Pick a Date', 'Enter Details', 'Review & Confirm'];

const serviceOptions = [
  'Oil Change',
  'Tire Replacement',
  'Brake Inspection',
  'Battery Check',
  'Transmission Repair',
  'Full Vehicle Inspection',
];

const ServiceBooking = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [shop, setShop] = useState('');
  const [services, setServices] = useState([]);
  const [date, setDate] = useState('');
  const [details, setDetails] = useState({ name: '', vehicle: '', phone: '' });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleCancel = () => {
    setActiveStep(0);
    setShop('');
    setServices([]);
    setDate('');
    setDetails({ name: '', vehicle: '', phone: '' });
  };

  const handleShopChange = (event) => {
    setShop(event.target.value);
  };

  const handleServiceChange = (event) => {
    const { target: { value } } = event;
    setServices(typeof value === 'string' ? value.split(',') : value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const handleReset = () => {
    setActiveStep(0);
    setShop('');
    setServices([]);
    setDate('');
    setDetails({ name: '', vehicle: '', phone: '' });
  };

  return (
    <Container>
      <Box sx={{ width: '100%', mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Book a Service
        </Typography>

        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" align="center">
              Booking Confirmed!
            </Typography>
            <Typography variant="body1" align="center" sx={{ mt: 2 }}>
              Thank you for booking a service. We will contact you soon.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button onClick={handleReset} variant="contained">Book Another Service</Button>
            </Box>
          </Box>
        ) : (
          <Box>
            {/* Step 1: Select Mechanic/Shop */}
            {activeStep === 0 && (
              <Box sx={{ mt: 4 }}>
                <FormControl fullWidth>
                  <InputLabel>Select Mechanic/Shop</InputLabel>
                  <Select value={shop} onChange={handleShopChange}>
                    <MenuItem value="AutoFix Shop - Downtown">AutoFix Shop - Downtown</MenuItem>
                    <MenuItem value="John's Repair Garage">John's Repair Garage</MenuItem>
                    <MenuItem value="QuickFix Mechanics">QuickFix Mechanics</MenuItem>
                    <MenuItem value="Elite Auto Care">Elite Auto Care</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}

            {/* Step 2: Select Service(s) */}
            {activeStep === 1 && (
              <Box sx={{ mt: 4 }}>
                <FormControl fullWidth>
                  <InputLabel>Select Service(s)</InputLabel>
                  <Select
                    multiple
                    value={services}
                    onChange={handleServiceChange}
                    input={<OutlinedInput label="Select Service(s)" />}
                    renderValue={(selected) => selected.join(', ')}
                  >
                    {serviceOptions.map((service) => (
                      <MenuItem key={service} value={service}>
                        <Checkbox checked={services.indexOf(service) > -1} />
                        <ListItemText primary={service} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}

            {/* Step 3: Pick a Date */}
            {activeStep === 2 && (
              <Box sx={{ mt: 4 }}>
                <TextField
                  label="Pick a Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={date}
                  onChange={handleDateChange}
                />
              </Box>
            )}

            {/* Step 4: Enter Details */}
            {activeStep === 3 && (
              <Box sx={{ mt: 4 }}>
                <TextField
                  label="Name"
                  fullWidth
                  name="name"
                  value={details.name}
                  onChange={handleDetailsChange}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Vehicle Model"
                  fullWidth
                  name="vehicle"
                  value={details.vehicle}
                  onChange={handleDetailsChange}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Phone Number"
                  fullWidth
                  name="phone"
                  value={details.phone}
                  onChange={handleDetailsChange}
                />
              </Box>
            )}

            {/* Step 5: Review & Confirm */}
            {activeStep === 4 && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6">Review Your Booking:</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Shop/Mechanic:</strong> {shop}
                </Typography>
                <Typography variant="body1">
                  <strong>Service(s):</strong> {services.join(', ')}
                </Typography>
                <Typography variant="body1">
                  <strong>Date:</strong> {date}
                </Typography>
                <Typography variant="body1">
                  <strong>Name:</strong> {details.name}
                </Typography>
                <Typography variant="body1">
                  <strong>Vehicle:</strong> {details.vehicle}
                </Typography>
                <Typography variant="body1">
                  <strong>Phone:</strong> {details.phone}
                </Typography>
              </Box>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={
                  (activeStep === 0 && !shop) ||
                  (activeStep === 1 && services.length === 0) ||
                  (activeStep === 2 && !date) ||
                  (activeStep === 3 && (!details.name || !details.vehicle || !details.phone))
                }
              >
                {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
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
    </Container>
  );
};

export default ServiceBooking;
