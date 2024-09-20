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
      <Container sx={{ mt: "70px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Manage Products
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
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
            >
              {editMode ? "Save Changes" : "Add Product"}
            </Button>
          </Box>
        </Box>

        <Typography variant="h5" gutterBottom>
          Product List
        </Typography>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography color="textSecondary">
                    ${product.price.toFixed(2)}
                  </Typography>
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
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export default EditProducts;
