import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function Connect() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Connect with us!
        </Typography>
        <Typography variant="subtitle1" component="p" gutterBottom>
          If you have any questions or concerns, please fill out the form below
          to get in touch with us.
        </Typography>
        <Box
          component="form"
          sx={{
            width: "100%",
            mt: 3,
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="message"
            label="Message"
            type="text"
            id="message"
            multiline
            rows={6}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Connect;
