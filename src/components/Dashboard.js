import React from "react";
import { Grid, Paper, Typography, Button, Box, Link } from "@mui/material";

const styles = {
  dashboard: {
    flexGrow: 1,
    padding: "16px",
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
        {/* <Grid item xs={12}>
          <Paper style={styles.paper}>
            <Typography variant="h6">Dashboard</Typography>
          </Paper>
        </Grid> */}
        <Grid item xs={12} md={6}>
          <Paper style={styles.paper}>
            <Typography variant="h6">Coffee Lovers</Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img
                src="https://i.imgur.com/cjCU6Dl.jpg"
                alt="coffee img"
                style={{ width: "100px", height: "100px" }}
              />
              <Button variant="contained" style={styles.button}>
                View Details
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={styles.paper}>
            <Typography variant="h6">Faith</Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img
                src="https://i.imgur.com/OoiWUDg.jpg"
                alt="coffee img"
                style={{ width: "100px", height: "100px" }}
              />
              <Button variant="contained" style={styles.button}>
                View Details
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={styles.paper}>
            <Typography variant="h6">Fitness</Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img
                src="https://i.imgur.com/J0N30AM.jpg"
                alt="coffee img"
                style={{ width: "100px", height: "100px" }}
              />
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
        <Grid item xs={12} md={4}>
          <Paper style={styles.paper}>
            <Typography variant="h6">Beauty</Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img
                src="https://i.imgur.com/7m840tc.jpg"
                alt="coffee img"
                style={{ width: "100px", height: "100px" }}
              />
              <Button variant="contained" style={styles.button}>
                View Details
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={styles.paper}>
            <Typography variant="h6">Health</Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img
                src="https://i.imgur.com/i4WYn5L.jpg"
                alt="coffee img"
                style={{ width: "200px", height: "100px" }}
              />
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
