'use client';

import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
  Button,
  IconButton,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from '../components/layout'; // Adjust the path as necessary

// Dummy data for the cart
const initialCartItems = [
  {
    id: 1,
    name: "Belt",
    price: 50,
    image: "/img/belt1.jpg",
    shop: "Nelson's Automotive Shop",
  },
  {
    id: 2,
    name: "Oil Filter",
    price: 15,
    image: "/img/oilfilter.jpg",
    shop: "Nelson's Automotive Shop",
  },
];

function Cart() {
  const [cart, setCart] = useState(initialCartItems);
  const [selectedItems, setSelectedItems] = useState([]); // Track selected items

  const handleQuantityChange = (id, value) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(value) || 1 } : item
    );
    setCart(updatedCart);
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    // Also remove from selected items if the removed item was selected
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id)); // Deselect
    } else {
      setSelectedItems([...selectedItems, id]); // Select
    }
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  const isOrderButtonDisabled = selectedItems.length === 0; // Disable button if no items are selected

  return (
    <Layout>
      {/* Background Image */}
      <Box
        sx={{
          backgroundImage: `url("/img/4.jpg")`, // Background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensure full height covers the viewport
          padding: '20px',
          marginTop: '-64px', // Adjust this value if your AppBar height differs
          display: 'flex', // Flexbox for centering content
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
        }}
      >
        {/* Confined Content Box */}
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent background
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            width: "100%",
            maxWidth: "900px", // Increased max-width for better spacing
          }}
        >
          <Container>
            <Typography variant="h4" color="primary" gutterBottom align="center">
              My Cart
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {cart.map((item) => (
              <Card
                key={item.id}
                sx={{
                  mb: 2,
                  borderRadius: "15px",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3} sm={2}>
                      <img
                        src={item.image}
                        alt={item.name}
                        width="100"
                        style={{ borderRadius: "8px" }}
                      />
                    </Grid>
                    <Grid item xs={6} sm={7}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {item.shop}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <Typography variant="body1" color="primary">
                        ${item.price.toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <TextField
                        type="number"
                        label="Quantity"
                        value={item.quantity || 1}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                        size="small"
                        sx={{ width: "100px" }}
                        InputProps={{
                          inputProps: { min: 1 },
                        }}
                      />
                    </Grid>
                    <Grid item xs={2} sm={1}>
                      <IconButton onClick={() => handleRemoveItem(item.id)}>
                        <DeleteIcon color="error" />
                      </IconButton>
                    </Grid>
                    <Grid item xs={2} sm={1}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedItems.includes(item.id)}
                            onChange={() => handleSelectItem(item.id)}
                            color="primary"
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }} // Increased size of the checkbox
                          />
                        }
                        
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}

            <Box
              sx={{
                mt: 3,
                p: 2,
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fff",
                textAlign: "right",
              }}
            >
              <Typography variant="h6" component="div" color="primary" gutterBottom>
                Total Amount
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                sx={{ fontWeight: "bold" }}
              >
                ${calculateTotal()}
              </Typography>
            </Box>
            <Grid
              container
              justifyContent="flex-end"
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => console.log("Place Order(s) clicked")}
                  href="/payment(Cart)"
                  disabled={isOrderButtonDisabled} // Disable if no item is selected
                >
                  Place Order(s)
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
}

export default Cart;
