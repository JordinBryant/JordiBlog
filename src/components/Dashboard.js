import React from "react";
import { Grid, Paper, Typography, Button, Box, Link } from "@mui/material";

const font = {
  fontFamily: "'Gloria Hallelujah', 'Instrument Serif', 'Lora', cursive",
  fontWeight: 400,
};

const styles = {
  dashboard: {
    flexGrow: 1,
    padding: "16px",
  },
  typography: {
    fontFamily: "Roboto Slab, sans-serif",
  },
  paper: {
    padding: "16px",
    textAlign: "center",
    color: "#000",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
  },
  button: {
    margin: "8px",
    backgroundColor: "#8bc6a4",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#6fac8a",
    },
    ...font,
  },
};

function Dashboard() {
  return (
    <div style={styles.dashboard}>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={3}></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={10} md={4}>
          <Paper
            style={{
              ...styles.paper,
              margin: "1rem",
              padding: "1rem",
              backgroundImage: "url(https://i.imgur.com/Y1YTC09.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: "'Gloria Hallelujah', 'Instrument Serif', Lora",
              }}
            >
              Coffee Lovers
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              style={{ marginTop: "1rem" }}
            >
              <Button variant="contained" style={styles.button}>
                View Details
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={10} md={4}>
          <Paper
            style={{
              ...styles.paper,
              margin: "1rem",
              padding: "1rem",
              backgroundImage: "url(https://i.imgur.com/4kVNM4H.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: "'Gloria Hallelujah', 'Instrument Serif', Lora",
              }}
            >
              Faith
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              style={{ marginTop: "1rem" }}
            >
              <Button variant="contained" style={styles.button}>
                View Details
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={10} md={4}>
          <Paper
            style={{
              ...styles.paper,
              margin: "1rem",
              padding: "1rem",
              backgroundImage: "url(https://i.imgur.com/veuP5Ng.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: "'Gloria Hallelujah', 'Instrument Serif', Lora",
              }}
            >
              Fitness
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              style={{ marginTop: "1rem" }}
            >
              <Link
                href="https://www.youtube.com/channel/UCuMH8HLMnKYrSenyILvRRuA"
                target="_blank"
              >
                <Button variant="contained" style={styles.button}>
                  Visit my YouTube channel
                </Button>
              </Link>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={10} md={4}>
          <Paper
            style={{
              ...styles.paper,
              margin: "1rem",
              padding: "1rem",
              backgroundImage: "url(https://i.imgur.com/dgfzBx4.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: "'Gloria Hallelujah', 'Instrument Serif', Lora",
              }}
            >
              Beauty
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              style={{ marginTop: "1rem" }}
            >
              <Button variant="contained" style={styles.button}>
                View Details
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={10} md={4}>
          <Paper
            style={{
              ...styles.paper,
              margin: "1rem",
              padding: "1rem",
              backgroundImage: "url(https://i.imgur.com/i4WYn5L.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: "'Gloria Hallelujah', 'Instrument Serif', Lora",
              }}
            >
              Health
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              style={{ marginTop: "1rem" }}
            >
              <Button variant="contained" style={styles.button}>
                View Details
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={10} md={4}>
          <Paper
            style={{
              ...styles.paper,
              margin: "1rem",
              padding: "1rem",
              backgroundImage: "url(https://i.imgur.com/sVkop0B.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: "'Gloria Hallelujah', 'Instrument Serif', Lora",
              }}
            >
              Motherhood
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              style={{ marginTop: "1rem" }}
            >
              <Button variant="contained" style={styles.button}>
                View Details
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
