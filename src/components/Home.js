import React from 'react'

function Home() {
    return (
        <div className='child' style={bodyStyle}>
            <Navbar title="TextUtils" navMode={mode} turnDark={turnDark} turnLight={turnLight} turnGreen={turnGreen} turnBlue={turnBlue} />
            <Alert alert={alert} />
            <TextForm heading="Enter the text to Analyze" areaheading="Text Area" navMode={mode} showAlert={showAlert} />
            {/* <About/> */}
        </div>
    )
}

export default Home
