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

function Hero() {
    return (
        <Box
            sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background:
                "linear-gradient(135deg, #1976d2 0%, #42a5f5 50%, #64b5f6 100%)",
            color: "white",
            px: 2,
            }}
        >
            <Container maxWidth={false} sx={{ px: { xs: 2, md: 8 }  }}>
            <Typography
                variant="h2"
                fontWeight="bold"
                sx={{ mb: 2}}
            >
                Empower Your Business with Modern Web Solutions
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                We help startups and enterprises build scalable, high-performance
                digital products using the latest technologies.
            </Typography>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
            >
                <Button
                variant="contained"
                size="large"
                sx={{
                    backgroundColor: "white",
                    color: "primary.main",
                    fontWeight: "bold",
                    px: 4,
                    "&:hover": { backgroundColor: "#f5f5f5" },
                }}
                >
                Start Free Trial
                </Button>
                <Button
                variant="outlined"
                size="large"
                sx={{
                    borderColor: "white",
                    color: "white",
                    fontWeight: "bold",
                    px: 4,
                }}
                >
                Learn More
                </Button>
            </Stack>
            </Container>
      </Box> );
}

export default Hero;