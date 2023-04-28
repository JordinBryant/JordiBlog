import React from "react";
import { Container, Box } from "@mui/material";

const LandingPage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundImage: "url(https://i.imgur.com/hONxghD.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Container>
  );
};

export default LandingPage;
