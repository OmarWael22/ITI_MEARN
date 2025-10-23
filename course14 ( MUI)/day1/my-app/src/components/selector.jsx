import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";

import AddProduct from "./addproduct";
import ProductElement from "./Products";

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState("Form");
  const [products, setProducts] = React.useState([]);

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) setAlignment(newAlignment);
  };

  const addProduct = (prod) => {
    setProducts((prev) => [...prev, prod]);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {/* Toggle Buttons */}
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          mb: 3,
         
        }}
      >
        <ToggleButton value="Form">Form</ToggleButton>
        <ToggleButton value="Products">Products</ToggleButton>
      </ToggleButtonGroup>

      {/* Conditional Rendering */}
      {alignment === "Form" ? (
        <AddProduct addProduct={addProduct} />
      ) : (
        <Grid
          container
          spacing={3}
        >
          {products.length === 0 ? (
            <p style={{ textAlign: "center", width: "100%" }}>No products yet</p>
          ) : (
            products.map((prod, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                display="flex"
                justifyContent="center"
              >
                <ProductElement {...prod} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </div>
  );
}
