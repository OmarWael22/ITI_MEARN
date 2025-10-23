import * as React from 'react';
import { TextField, Button, Card, CardContent, Typography, Stack } from '@mui/material';

export default function AddProduct({ addProduct }) {
  const [formData, setFormData] = React.useState({
    image: '',
    name: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) {
      alert('Please fill in the required fields (name and price)');
      return;
    }
    addProduct(formData);
    setFormData({ image: '', name: '', description: '', price: '' }); // reset form
  };

  return (
    <Card sx={{ maxWidth: 500, mx: 'auto', mt: 4, p: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Add New Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
            />
            <TextField
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
              Add Product
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}
