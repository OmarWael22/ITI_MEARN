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

function CTA() {
    return ( 
        <Box
        sx={{
          py: 10,
          px: 2,
          textAlign: "center",
          background: "linear-gradient(90deg, #1565c0 0%, #42a5f5 100%)",
          color: "white",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Ready to Grow Your Business?
          </Typography>
          <Typography variant="h6" mb={4} sx={{ opacity: 0.9 }}>
            Join thousands of companies using our platform to accelerate
            innovation and scale faster.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "white",
              color: "primary.main",
              fontWeight: "bold",
              borderRadius: 3,
              px: 5,
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            Get Started Now
          </Button>
        </Container>
      </Box>
     );
}

export default CTA;
