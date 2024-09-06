'use client';

import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, CssBaseline, Box, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import InfoIcon from '@mui/icons-material/Info';

class Layout extends Component {
  state = {
    drawerOpen: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({ drawerOpen: open });
  };

  render() {
    const { drawerOpen } = this.state;

    return (
      <>
        <CssBaseline />
        
        <AppBar position="static" sx={{ backgroundColor: '#333' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={this.toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            
            {/* Add logo image next to the CarCare Typography */}
            <Box component="img" src="/CarCare.png" alt="CarCare Logo" sx={{ height: 40, mr: 2 }} />

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Carcare
            </Typography>

            <Button color="inherit">LOGIN / SIGNUP</Button>
          </Toolbar>
        </AppBar>

        {/* Drawer for menu items */}
        <Drawer 
          anchor="left" 
          open={drawerOpen} 
          onClose={this.toggleDrawer(false)} 
          sx={{ '& .MuiDrawer-paper': { backgroundColor: '#444', color: '#fff', width: 250 } }} // Customize background color and width
        >
          <Box sx={{ padding: '16px', backgroundColor: '#333', color: '#fff' }}>
            <Typography variant="h6">Menu</Typography>
          </Box>
          <Box
            role="presentation"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <List>
              <ListItem button sx={{ '&:hover': { backgroundColor: '#555' } }}>
                <ListItemIcon>
                  <HomeIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <EventIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Booking" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ShoppingCartIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="About Us" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        <Box sx={{ mt: 5 }}>
          {this.props.children}
        </Box>
      </>
    );
  }
}

export default Layout;

