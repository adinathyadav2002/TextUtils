import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import About from './components/About'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  const [bodyStyle, setBodyStyle] = useState({
    backgroundColor: "white",
  })
  const [mode, setMode] = useState({
    color: "black",
    bgColor: "white",
    borColor: "black",
    butBgColor: "#b7b7b8",
    butColor: "white"
  })
  const [alert, setAlert] = useState(null)

  const turnDark = () => {
    setMode({
      color: "white",
      bgColor: "rgb(40 39 39)",
      borColor: "white",
      butBgColor: "rgb(132 131 131)",
      butColor: "white"
    })
    setBodyStyle({
      backgroundColor: "rgb(40 39 39)",
    })

    document.body.style.backgroundColor = "rgb(40 39 39)"
    showAlert('Dark mode Enabled', 'Success')
  }

  const turnLight = () => {
    setMode({
      color: "black",
      bgColor: "white",
      borColor: "black",
      butBgColor: "#b7b7b8",
      butColor: "white"
    })
    setBodyStyle({
      backgroundColor: "white",
    })


    document.body.style.backgroundColor = "white"
    showAlert('Light mode Enabled', 'Success')
  }

  const turnGreen = () => {
    setMode({
      color: "black",
      bgColor: "#b0f7a8",
      borColor: "blue",
      butBgColor: "rgb(122 255 120)",
      butColor: "black"
    })
    setBodyStyle({
      backgroundColor: "#b0f7a8",
    })
    document.body.style.backgroundColor = "#b0f7a8"
    showAlert('Green mode Enabled', 'Success')
  }
  const turnBlue = () => {
    setMode({
      color: "black",
      bgColor: "skyblue",
      borColor: "blue",
      butBgColor: "rgb(126 178 255)",
      butColor: "black"
    })
    setBodyStyle({
      backgroundColor: "skyblue",
    })
    document.body.style.backgroundColor = "skyblue"
    showAlert('Green mode Enabled', 'Success')
  }

  const showAlert = (message, type) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" navMode={mode} turnDark={turnDark} turnLight={turnLight} turnGreen={turnGreen} turnBlue={turnBlue} />
      <Alert alert={alert} />
      <Routes>
        <Route path='/' element={<TextForm heading="Enter the text to Analyze" areaheading="Text Area" navMode={mode} showAlert={showAlert} />}/>
        <Route path="/About" element={<About />} />
        {/* <Route path="/text" element={<h1>Hello sir</h1>} /> */}
      </Routes>
    </Router >
    </>
  );
}

export default App;
