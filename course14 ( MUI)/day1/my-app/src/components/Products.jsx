import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ProductElement({ image, name, description, price }) {
  return (
    <Card sx={{ maxWidth: 300, margin: '16px auto', boxShadow: 3 }}>
      {image && (
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={name}
        />
      )}

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description || "No description provided."}
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 'bold' }}>
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
}
