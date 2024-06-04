import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

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
  }

  return (
    <div className='child' style={bodyStyle}>
      <Navbar title="TextUtils" navMode={mode} turnDark={turnDark} turnLight={turnLight} butStyle={butstyle} />
      <TextForm heading="Enter the text to Analyze" areaheading="Text Area" mode={mode} TextStyle={style} />
      {/* <About/> */}
    </div>
  );
}

export default App;
