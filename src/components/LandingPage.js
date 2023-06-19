import React from "react";
import { Container, Box } from "@mui/material";

const LandingPage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          height: "80vh",
          width: "98vw",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url(https://i.imgur.com/vMGbGBg.jpgg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0 100px 200px rgba(0, 0, 0, 0.4)",
        }}
      />
    </Container>
  );
};

export default LandingPage;
