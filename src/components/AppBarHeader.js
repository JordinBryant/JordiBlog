import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import "../styles.css";

const AppBarHeader = ({ onLogout }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const drawerItems = [
    { text: "Home", href: "/home" },
    { text: "Connect", href: "/connect" },
    { text: "About", href: "/about" },
  ];

  return (
    <Router>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "80px",
            padding: "0 2rem",
          }}
        >
          <Button
            variant="text"
            color="inherit"
            onClick={handleDrawerToggle}
            style={{ fontSize: "1rem", fontWeight: "bold", color: "#212121" }}
          >
            Menu
          </Button>

          <Button
            variant="text"
            color="inherit"
            onClick={handleDrawerToggle}
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#fff",
              padding: "10px 0",
            }}
          >
            <span className="menu-icon"></span>
          </Button>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              href="/chatbox"
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#558b2f",
                borderRadius: "25px",
                padding: "0.5rem 1rem",
                marginLeft: "2rem",
                fontFamily:
                  "'Gloria Hallelujah', 'Instrument Serif', 'Lora', cursive",
              }}
            >
              Chat with us!
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={onLogout}
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "25px",
                marginLeft: "2rem",
                backgroundColor: "#3f51b5",
                color: "#fff",
              }}
            >
              logout
            </Button>
          </div>
        </div>
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={handleDrawerToggle}
          PaperProps={{
            style: {
              backgroundColor: "#ffcc80",
              fontFamily:
                "'Gloria Hallelujah', 'Instrument Serif', 'Lora', cursive, sans-serif",
              fontWeight: "bold",
            },
          }}
        >
          <List>
            {drawerItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={handleDrawerToggle}
                component="a"
                href={item.href}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    style: {
                      fontFamily:
                        "'Gloria Hallelujah', 'Instrument Serif', 'Lora', cursive",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </Router>
  );
};

export default AppBarHeader;
