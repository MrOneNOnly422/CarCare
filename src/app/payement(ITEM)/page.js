'use client';

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid, FormControl, InputLabel, Select, MenuItem, IconButton, Tooltip, Card, CardContent } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Layout from '../components/layout';

const PaymentPage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    // Handle payment logic here
    setIsPaid(true);
  };

  return (
    <Layout>
      <Box
        sx={{
            backgroundImage: `url('/img/1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '20px',
            marginTop: '-64px', // Adjust for AppBar height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
      >
        <Container
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '16px',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
            padding: '30px',
            maxWidth: '600px',
            mt: 2,
          }}
        >
          <Typography variant="h3" align="center" color="primary" gutterBottom>
            Payment Details
          </Typography>

          {!isPaid ? (
            <form onSubmit={(e) => e.preventDefault()}>
              {/* Name Field */}
              <TextField
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <Tooltip title="Your full name">
                      <IconButton sx={{ color: 'primary.main' }}>
                        <AccountBalanceIcon />
                      </IconButton>
                    </Tooltip>
                  ),
                }}
                sx={{
                  '& .MuiInputBase-root': {
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                  },
                }}
              />

              {/* Address Field */}
              <TextField
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
                required
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <Tooltip title="Your shipping address">
                      <IconButton sx={{ color: 'primary.main' }}>
                        <AccountBalanceIcon />
                      </IconButton>
                    </Tooltip>
                  ),
                }}
                sx={{
                  '& .MuiInputBase-root': {
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                  },
                }}
              />

              {/* Card Number Field */}
              <TextField
                label="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                fullWidth
                required
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <Tooltip title="Your credit card number">
                      <IconButton sx={{ color: 'primary.main' }}>
                        <CreditCardIcon />
                      </IconButton>
                    </Tooltip>
                  ),
                }}
                sx={{
                  '& .MuiInputBase-root': {
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                  },
                }}
              />

              {/* Payment Method Selection */}
              <FormControl fullWidth required margin="normal" sx={{ mt: 2 }}>
                <InputLabel>Payment Method</InputLabel>
                <Select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  label="Payment Method"
                  sx={{
                    '& .MuiSelect-root': {
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <MenuItem value="creditCard">Credit Card</MenuItem>
                  <MenuItem value="paypal">PayPal</MenuItem>
                  <MenuItem value="bankTransfer">Bank Transfer</MenuItem>
                  <MenuItem value="bankTransfer">Cash</MenuItem>
                </Select>
              </FormControl>

              {/* Pay Now Button */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{
                  mt: 3,
                  borderRadius: '8px',
                  '&:hover': {
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                  },
                }}
                onClick={handlePayment}
              >
                Pay Now
              </Button>
            </form>
          ) : (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" color="success.main" gutterBottom>
                Payment Successful!
              </Typography>
              <Button variant="contained" color="primary" href="/homepage" fullWidth>
                Go to Home
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </Layout>
  );
};

export default PaymentPage;
