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

function Features() {
    return ( 
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            color="primary.main"
            >
            Why Choose Us
            </Typography>
            <Typography
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
            >
            We deliver high-quality, optimized, and maintainable web solutions for
            your business growth.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
            {[
                {
                icon: <Code fontSize="large" color="primary" />,
                title: "Developer Friendly",
                desc: "Clean, modular, and well-documented code built using React and Node.js.",
                },
                {
                icon: <DesignServices fontSize="large" color="primary" />,
                title: "Modern Design",
                desc: "Pixel-perfect interfaces with a focus on usability and aesthetics.",
                },
                {
                icon: <Speed fontSize="large" color="primary" />,
                title: "Lightning Fast",
                desc: "Optimized for performance and scalability with cutting-edge tools.",
                },
            ].map((f, i) => (
                <Grid size={{xs:12,sm:6,md:4}} key={i}>
                <Card
                    elevation={4}
                    sx={{
                    textAlign: "center",
                    height : "200px",
                    py: 5,
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                    },
                    }}
                >
                    <CardContent>
                    {f.icon}
                    <Typography variant="h6" mt={2} mb={1}>
                        {f.title}
                    </Typography>
                    <Typography color="text.secondary">{f.desc}</Typography>
                    </CardContent>
                </Card>
                </Grid>
            ))}
            </Grid>
      </Container>
     );
}

export default Features;