'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
    
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(13, 71, 161, 1)', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          height: '70px',
          display: 'flex',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease', 
          zIndex: 1200, 
        }}
      >
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Box component="img" src="/CarCare.png" alt="CarCare Logo" sx={{ height: 40, mr: 2 }} />

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              sx={{ '&:hover': { color: 'gray' }, fontWeight: 'bold', fontFamily: 'Arial, sans-serif'}}
              href="/login"
            >
              Login
            </Button>
            <Button
              color="inherit"
              sx={{ '&:hover': { color: 'gray' }, fontWeight: 'bold', fontFamily: 'Arial, sans-serif'}}
              href="/register"
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          height: '100vh', 
          overflow: 'hidden',
          marginTop: '70px', 
        }}
      >
        <Slider
          dots={true}
          infinite={true}
          speed={800} 
          slidesToShow={1}
          slidesToScroll={1}
          fade={true} 
          autoplay={true} 
          autoplaySpeed={3000} 
          style={{ width: '100%', height: '100%' }} 
        >
          {[
            {
              image: '/img/1.jpg',
              title: 'Welcome to Carcare',
              description: 'Your trusted partner for all car maintenance needs.',
              additionalInfo: 'We offer a wide range of services to keep your car running smoothly.',
            },
            {
              image: '/img/2.jpg',
              title: 'Our Services',
              description: 'High-quality car repairs and maintenance.',
              additionalInfo: 'From oil changes to engine repairs, we handle it all.',
            },
            {
              image: '/img/3.jpg',
              title: 'Contact Us',
              description: 'Get in touch for more information.',
              additionalInfo: 'We are here to help you with any queries you may have.',
            },
          ].map((slide, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.0)', 
                  padding: 3, 
                  borderRadius: 1,
                  textAlign: 'left',
                  zIndex: 1,
                  left: 20, 
                  top: '30%',
                  transform: 'translateY(-50%)',
                  maxWidth: '50%', 
                }}
              >
                <Typography
                  variant="h2" 
                  component="div"
                  sx={{ fontWeight: 'bold' }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h4" 
                  sx={{ mt: 1 }}
                >
                  {slide.description}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 1 }}
                >
                  {slide.additionalInfo}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default App;