'use client';

import React, { useState } from 'react';
import Footer from '../components/footer'; // Ensure correct case and path
import { Container, Button, Box, Grid, Card, CardContent, CardMedia, TextField, InputAdornment } from '@mui/material';
import Layout from '../components/layout'; // or '../layouts/Layout'
import SearchIcon from '@mui/icons-material/Search';

const repairShops = [
  {
    name: "My Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/1.jpg",
    rating: 4,
  },
  {
    name: "Our Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/2.jpg",
    rating: 5,
  },
  {
    name: "Wala Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/3.jpg",
    rating: 4,
  },
  {
    name: "Another Repair Shop",
    description: "Likoan Margindon Cebu",
    imageUrl: "/img/4.jpg",
    rating: 3,
  },
  // Additional shop entries...
];

const RepairShopCard = ({ shop }) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '16px', // Rounded corners
      backgroundColor: '#212121', // Dark background color similar to the example
      color: 'white', // White text for better contrast
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    }}
  >
    <CardMedia
      component="img"
      sx={{
        height: 140,
        objectFit: 'cover',
        borderTopLeftRadius: '16px', // Match with card border radius
        borderTopRightRadius: '16px',
      }}
      image={shop.imageUrl}
      alt={shop.name}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          color="inherit"
          variant="text"
          sx={{
            color: '#90caf9', // Light blue text color
            fontWeight: 'bold',
            textTransform: 'none', // Keep normal text casing
          }}
        >
          {shop.name}
        </Button>
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: 1 }}>
        <Button
          color="inherit"
          variant="text"
          sx={{ color: 'white', textTransform: 'none' }}
        >
          {shop.description}
        </Button>
      </Box>
    </CardContent>
    <Box
      sx={{
        padding: 2,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#424242', // Slightly darker footer background
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
      }}
    >
      <Button variant="contained" color="primary" href="/service">
        Visit Now
      </Button>
      <Button variant="outlined" color="error" href="/shop">
        Shop
      </Button>
    </Box>
  </Card>
);


const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredShops = repairShops.filter((shop) =>
    shop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Background Box with background image */}
      <Box
        sx={{
          backgroundImage: `url("/img/1.jpg")`, // Set the background image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensures it covers the entire viewport height
          padding: '20px',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ my: 4, textAlign: 'center' }}>
            {/* Search Bar */}
            <TextField
              variant="outlined"
              placeholder="Search for repair shops..."
              sx={{ backgroundColor: 'white', width: '100%', maxWidth: '600px', borderRadius: '25px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Box>

          {/* Display Repair Shop Cards */}
          <Grid container spacing={4} justifyContent="center">
            {filteredShops.map((shop, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <RepairShopCard shop={shop} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Layout>
  );
};

export default Homepage;
