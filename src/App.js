import "./App.css";
import Alert from "./components/alerts/Alert";
import TextForm from "./components/forms/TextForm";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setbtnText] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setbtnText("Enable LightMode");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setbtnText("Enable DarkMode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          btnText={btnText}
        />
        <Alert alert={alert} />
        <div className="container mt-5 my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading={"Enter the text to Analyze"}
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
            <Route path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
