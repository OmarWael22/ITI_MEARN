import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
  IconButton,
} from "@mui/material";
import {
  Code,
  DesignServices,
  Speed,
  Facebook,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";

function Footer() {
    return ( 
        <Box sx={{ py: 4, textAlign: "center", bgcolor: "#f5f5f5" }}>
        <Stack direction="row" spacing={2} justifyContent="center" mb={1}>
          <IconButton color="primary">
            <Facebook />
          </IconButton>
          <IconButton color="primary">
            <Twitter />
          </IconButton>
          <IconButton color="primary">
            <LinkedIn />
          </IconButton>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          © 2025 MyLanding. All rights reserved.
        </Typography>
      </Box>
     );
}

export default Footer;