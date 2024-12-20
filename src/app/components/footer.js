// Footer.js

import React from 'react';
import { Container, Grid, Typography, List, ListItem, Link, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LocationOn, Email, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '3rem 0', position: 'relative', bottom: 0, width: '100%' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Contact Section */}
          <Grid item md={4} xs={12}>
            <Typography variant="h6" gutterBottom color="primary">
              Contact Us
            </Typography>
            <List>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn color="action" sx={{ marginRight: 1 }} />
                <Link href="#" color="inherit">University of Cebu - LM Campus</Link>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <Email color="action" sx={{ marginRight: 1 }} />
                <Link href="mailto:contact@surfsidemedia.in" color="inherit">contact@react.in</Link>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone color="action" sx={{ marginRight: 1 }} />
                <Link href="tel:+911234567890" color="inherit">+91-1234567890</Link>
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ marginTop: 2 }} gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="inherit" href="#" sx={{ '&:hover': { backgroundColor: '#3b5998' } }}>
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="#" sx={{ '&:hover': { backgroundColor: '#1da1f2' } }}>
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href="#" sx={{ '&:hover': { backgroundColor: '#e4405f' } }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          {/* Links Section */}
          <Grid item md={4} xs={12}>
            <Typography variant="h6" gutterBottom color="primary">
              Quick Links
            </Typography>
            <List sx={{ padding: 0 }}>
              <ListItem><Link href="about-us.html" color="inherit">About Us</Link></ListItem>
              <ListItem><Link href="contact-us.html" color="inherit">Contact Us</Link></ListItem>
              <ListItem><Link href="faq.html" color="inherit">FAQ</Link></ListItem>
              <ListItem><Link href="terms-of-use.html" color="inherit">Terms of Use</Link></ListItem>
              <ListItem><Link href="privacy.html" color="inherit">Privacy</Link></ListItem>
            </List>
          </Grid>

        </Grid>
      </Container>

      {/* Footer Bottom */}
      <Box sx={{ borderTop: '1px solid #444', paddingTop: '1rem', backgroundColor: '#222', marginTop: '2rem' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" align="center" color="inherit">
                &copy; {new Date().getFullYear()} Carcare. All Rights Reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link href="https://www.example.com" color="inherit" variant="body2">
                Terms of Service
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
