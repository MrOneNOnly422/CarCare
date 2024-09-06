'use client';

// pages/about.js

import React from 'react';
import { Container, Paper, Grid, Box, Typography } from '@mui/material';
import Layout from '../components/layout'; // or '../layouts/Layout'

function AboutUsPage() {
    return (
        <Layout>
            <Box
                sx={{
                    backgroundImage: `url(/path-to-engine-background.jpg)`, // Background image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                }}
            >
                <Container maxWidth="md" sx={{ pt: 10 }}>
                    <Paper elevation={3} sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            {/* Shop Logo */}
                            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                <img src="/CarCare.png" alt="CarCare" style={{ width: '200px', height: 'auto', display: 'block', margin: '0 auto' }} />
                            </Grid>

                            {/* About Us details */}
                            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                <Typography variant="h4" gutterBottom>
                                    CarCare
                                </Typography>
                                <Typography variant="body1" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        </Layout>
    );
}

export default AboutUsPage;