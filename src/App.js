// import { type } from '@testing-library/user-event/dist/type';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';

import React, { useState } from 'react'

function App() {
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white"
  })
  const [bodyStyle, setBodyStyle] = useState({
    backgroundColor: "white",
  })
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const [butstyle, setbutstyle] = useState("black")

  const turnDark = () => {
    setMode('dark')
    setbutstyle('white')
    setBodyStyle({
      backgroundColor: "#343a40",
    })
    setStyle({
      color: "white",
      backgroundColor: "#343a40"
    })
    document.body.style.backgroundColor = "#343a40"
    showAlert('Dark mode Enabled', 'Success')
  }
  const turnLight = () => {
    setMode('light')
    setBodyStyle({
      backgroundColor: "white",
    })
    setbutstyle('black')
    setStyle({
      color: "black",
      backgroundColor: "white"
    })
    document.body.style.backgroundColor = "white"
    showAlert('Light mode Enabled', 'Success')
  }

  const showAlert = (message, type) =>{
    setAlert({
      type:type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <div className='child' style={bodyStyle}>
      <Navbar title="TextUtils" navMode={mode} turnDark={turnDark} turnLight={turnLight} butStyle={butstyle}/>
      <Alert alert={alert}/>
      <TextForm heading="Enter the text to Analyze" areaheading="Text Area" mode={mode} TextStyle={style} showAlert={showAlert}/>
      {/* <About/> */}
    </div>
  );
}

export default App;
