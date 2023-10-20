import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [themeName, setThemeName] = useState("dark mode");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2e5c85";
      showAlert("Dark mode has been enabled", "success");
      setThemeName("light mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      setThemeName("dark mode");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="WordWizards"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          themeName={themeName}
        />
        <Alert alert={alert} />
        {/* <TextForm heading="Enter Your Text Here !" mode={mode} showAlert={showAlert}/> */}
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Word counter,character counter,remove extra spaces"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
