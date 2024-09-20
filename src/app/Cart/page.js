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

  const handleQuantityChange = (id, value) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(value) || 1 } : item
    );
    setCart(updatedCart);
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  return (
    <Layout>
      <Container sx={{ mt: "70px", padding: 2 }}>
        <Typography variant="h4" gutterBottom>
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
                <Grid item xs={2}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="80"
                    style={{ borderRadius: "8px" }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.shop}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1" color="primary">
                    ${item.price.toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    type="number"
                    label="Quantity"
                    value={item.quantity || 1}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    size="small"
                    sx={{ width: "100px" }}
                    InputProps={{
                      inputProps: { min: 1 },
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton onClick={() => handleRemoveItem(item.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
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
          <Typography variant="h6" component="div" gutterBottom>
            Total Amount
          </Typography>
          <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
            ${calculateTotal()}
          </Typography>
        </Box>
        <Grid container justifyContent="flex-end" spacing={2} sx={{ mt: 1 }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => console.log("Place Order(s) clicked")}
            >
              Place Order(s)
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Cart;
