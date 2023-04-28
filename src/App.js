import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import AppBarHeader from "./components/AppBarHeader.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Connect.js";
import ChatBox from "./pages/ChatBox.js";
import Login from "./components/Login.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      {!loggedIn && <Login onLogin={handleLogin} />}
      {loggedIn && <AppBarHeader onLogout={handleLogout} />}
      <Switch>
        <Route exact path="/">
          {loggedIn && <Redirect to="/home" />}
        </Route>

        {loggedIn && (
          <>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/connect">
              <Contact />
            </Route>
            <Route path="/chatbox">
              <ChatBox />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
