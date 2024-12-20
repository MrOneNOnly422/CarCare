'use client';

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'; // For Next.js

const pages = [
  { label: 'Home', path: '/homepage' },
  { label: 'Book A Service', path: '/servicebook' },
  { label: 'Shop', path: '/shop' },
  { label: 'About Us', path: '/about' },
];
const settings = [
  { label: 'Profile', path: '/profileedit(user)' },
  { label: 'Account', path: '/accountedit(User)' },
  { label: 'Logout', path: '/login' },
];

function Layout({ children }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: '#333' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Link href="/" passHref>
              <img
                src="/CarCare.png"
                alt="CarCare Logo"
                style={{
                  width: '40px',
                  height: '40px',
                  marginRight: '16px',
                  cursor: 'pointer',
                }}
              />
            </Link>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CARCARE
            </Typography>

            {/* Responsive Menu for Mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map(({ label, path }) => (
                  <MenuItem key={label} onClick={handleCloseNavMenu}>
                    <Link href={path} passHref>
                      <Typography textAlign="center">{label}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(({ label, path }) => (
                <Link key={label} href={path} passHref>
                  <Button
                    sx={{
                      my: 2,
                      color: 'white',
                      display: 'block',
                      '&:hover': { backgroundColor: '#000' },
                    }}
                  >
                    {label}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* User Menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="User Settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="/img/Kot.JPG" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(({ label, path }) => (
                  <MenuItem key={label} onClick={handleCloseUserMenu}>
                    <Link href={path} passHref>
                      <Typography textAlign="center">{label}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ mt: 5 }}>{children}</Box>
    </>
  );
}

export default Layout;
