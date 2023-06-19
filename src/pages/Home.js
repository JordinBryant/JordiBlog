import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/Home.css";
import Dashboard from "../components/Dashboard.js";
import LandingPage from "../components/LandingPage.js";

const Home = () => {
  const handleLogout = () => {
    // handle logout logic here
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></div>
      <Router>
        <LandingPage />
        <Box
          style={{
            float: "left",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundColor: "#ffcc80",
            backgroundAttachment: "fixed",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Dashboard />
        </Box>
      </Router>
    </>
  );
};

export default Home;
