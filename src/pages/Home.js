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
          height: "80px",
          padding: "0 2rem",
          backgroundColor: "#d1c4e9",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      ></div>
      <Router>
        <LandingPage />
        <Box
          style={{
            float: "left",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundColor: "#d1c4e9",
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
