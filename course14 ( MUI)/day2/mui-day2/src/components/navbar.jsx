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

function Navbar() {
    return ( 
        <AppBar
          position="fixed"
          elevation={2}
          sx={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
            color: "black",
          }}
      >
        <Container maxWidth="lg">

          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              MyLanding
            </Typography>
            <Box>
              {["Home", "Features", "Pricing", "Contact"].map((item) => (
                <Button key={item} color="inherit" sx={{ mx: 1}}>
                  {item}
                </Button>
              ))}
              <Button
                
                variant="contained"
                sx={{
                  ml: 2,
                  borderRadius: 2,
                  boxShadow: "0px 3px 8px rgba(0,0,0,0.15)",
                }}
              >
                Get Started
              </Button>
            </Box>
          </Toolbar>
        </Container>
        </AppBar>
     );
}

export default Navbar;