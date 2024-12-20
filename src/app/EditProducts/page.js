'use client';

import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
  CardActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Layout from "../components/layout";

// Initial mock product data
const initialProducts = [
  {
    id: 1,
    name: "Belt",
    price: 50,
    image: "/img/belt1.jpg",
  },
  {
    id: 2,
    name: "Oil Filter",
    price: 15,
    image: "/img/oilfilter.jpg",
  },
];

function EditProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [productId, setProductId] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Add new product
  const handleAddProduct = () => {
    const updatedProducts = [...products];
    if (editMode) {
      const index = updatedProducts.findIndex((prod) => prod.id === productId);
      updatedProducts[index] = { ...newProduct, id: productId };
    } else {
      setProducts([
        ...products,
        { ...newProduct, id: Date.now(), price: parseFloat(newProduct.price) },
      ]);
    }
    setProducts(updatedProducts);
    setNewProduct({ name: "", price: "", image: "" });
    setEditMode(false);
  };

  // Edit product
  const handleEditProduct = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setNewProduct(productToEdit);
    setEditMode(true);
    setProductId(id);
  };

  // Delete product
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <Layout> {/* Wrap with Layout */}
      {/* Fullscreen Background Box with image */}
      <Box
        sx={{
          backgroundImage: `url("/img/3.jpg")`, // Updated background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh', // Full viewport height
          padding: '20px',
          marginTop: '-64px', // Adjusted to offset AppBar height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Container sx={{ mt: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#00221A', fontWeight: 'bold' }}>
            Manage Products
          </Typography>

          <Box sx={{ mb: 4, backgroundColor: 'rgba(255, 255, 255, 0.85)', padding: '20px', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#388e3c' }}>
              {editMode ? "Edit Product" : "Add New Product"}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Product Name"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Price"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  variant="outlined"
                  required
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Image URL"
                  name="image"
                  value={newProduct.image}
                  onChange={handleInputChange}
                  variant="outlined"
                  required
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddProduct}
                sx={{ width: '100%' }}
              >
                {editMode ? "Save Changes" : "Add Product"}
              </Button>
            </Box>
          </Box>

          <Typography variant="h5" gutterBottom sx={{ color: '#00674F', fontWeight: 'bold' }}>
            Product List
          </Typography>

          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography color="textSecondary">${product.price.toFixed(2)}</Typography>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
                    />
                  </CardContent>
                  <CardActions>
                    <IconButton
                      color="primary"
                      onClick={() => handleEditProduct(product.id)}
                      sx={{ '&:hover': { backgroundColor: '#0288d1' } }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteProduct(product.id)}
                      sx={{ '&:hover': { backgroundColor: '#d32f2f' } }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}

export default EditProducts;
