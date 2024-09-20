'use client';

// pages/profile.js
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
  IconButton,
  Grid,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Layout from '../components/layout'; // Adjust the path as necessary

function Profile() {
  const [name, setName] = useState("James Crispe");
  const [email, setEmail] = useState("manoknapula22@gmail.com");
  const [profilePic, setProfilePic] = useState("/img/default-avatar.png"); // Default avatar

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to API)
    console.log("Profile updated:", { name, email, profilePic });
  };

  return (
    <Layout>
      <Container sx={{ mt: "70px", padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Edit Profile
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar
                alt="Profile Picture"
                src={profilePic}
                sx={{ width: 100, height: 100 }}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ position: "relative", top: -30, left: 70 }}
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleProfilePicChange}
                />
                <PhotoCamera />
              </IconButton>
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ mt: 2 }}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}

export default Profile;