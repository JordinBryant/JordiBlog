import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    minWidth: 300,
    maxWidth: 400,
    backgroundColor: "#fafafa",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
  },
  cardHeader: {
    backgroundColor: "#8bc6a4",
    color: "#fff",
    textAlign: "center",
    padding: "16px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
  },
  input: {
    margin: "8px",
    width: "100%",
  },
  button: {
    margin: "16px 0",
    backgroundColor: "#8bc6a4",
    color: "#fff",
    width: "100%",
    "&:hover": {
      backgroundColor: "#6fac8a",
    },
  },
  createAccount: {
    marginTop: "16px",
    textAlign: "center",
  },
};

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin(username, password);
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <CardContent>
          <CardHeader title="Login" style={styles.cardHeader} />
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
                margin="dense"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                color="secondary"
                fullWidth
                margin="dense"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              style={styles.button}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
