'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Layout from '../components/layout'; // Adjust the import path if needed

const ProfileEdit = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleSaveChanges = () => {
    console.log('Profile updated:', { email, name, phone, address });
    alert('Profile updated successfully!');
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Password updated:', { currentPassword, newPassword });
    alert('Password changed successfully!');
  };

  const handleDeleteAccount = () => {
    console.log('Account deleted');
    alert('Account deleted successfully!');
    setDeleteDialogOpen(false);
  };

  return (
    <Layout>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url("/img/3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
            borderRadius: 3,
            boxShadow: 3,
            padding: 4,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Edit Account 
          </Typography>
          <Divider sx={{ mb: 4 }} />

          {/* Profile Information Section */}
          <Box>
            <Typography variant="h6" gutterBottom color="secondary">
              Personal Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone"
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  fullWidth
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Password Update Section */}
          <Box>
            <Typography variant="h6" gutterBottom color="secondary">
              Change Password
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Current Password"
                  type="password"
                  fullWidth
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="New Password"
                  type="password"
                  fullWidth
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Confirm New Password"
                  type="password"
                  fullWidth
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handleChangePassword}
            >
              Change Password
            </Button>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Delete Account Section */}
          <Box>
            <Typography variant="h6" gutterBottom color="error">
              Delete Account
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              Once you delete your account, there is no going back. Please be certain.
            </Typography>
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={() => setDeleteDialogOpen(true)}
            >
              Delete Account
            </Button>
          </Box>

          {/* Delete Account Confirmation Dialog */}
          <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogContent>
              <Typography>
                Are you sure you want to delete your account? This action cannot be undone.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
                Cancel
              </Button>
              <Button onClick={handleDeleteAccount} color="error">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
    </Layout>
  );
};

export default ProfileEdit;
