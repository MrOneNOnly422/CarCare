// Footer.js

import React from 'react';
import { Container, Grid, Typography, List, ListItem, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LocationOn, Email, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '-15px', backgroundColor: '#222', color: '#fff', padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Contact Section */}
          <Grid item md={4} xs={12}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <List>
              <ListItem>
                <LocationOn color="action" sx={{ marginRight: 1 }} />
                <Link href="#" color="inherit">University of Cebu - LM Campus</Link>
              </ListItem>
              <ListItem>
                <Email color="action" sx={{ marginRight: 1 }} />
                <Link href="mailto:contact@surfsidemedia.in" color="inherit">contact@react.in</Link>
              </ListItem>
              <ListItem>
                <Phone color="action" sx={{ marginRight: 1 }} />
                <Link href="tel:+911234567890" color="inherit">+91-1234567890</Link>
              </ListItem>
            </List>
            <Typography variant="h6" sx={{ marginTop: 2 }} gutterBottom justifyContent="center">
              Follow Us
            </Typography>
            <List sx={{ display: 'flex' }}>
              <ListItem sx={{ padding: 0 }}>
                <IconButton color="inherit" href="#"><Facebook /></IconButton>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <IconButton color="inherit" href="#"><Twitter /></IconButton>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <IconButton color="inherit" href="#"><Instagram /></IconButton>
              </ListItem>
            </List>
          </Grid>

          {/* Links Section */}
          <Grid item md={4} xs={12}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
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
      <Container maxWidth="lg" sx={{ borderTop: '1px solid #444', paddingTop: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="center">
              &copy; {new Date().getFullYear()} Carcare. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
