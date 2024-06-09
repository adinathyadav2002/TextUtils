import React, {useState} from 'react'
// to work with state we have to import useState 

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here")

    const updateText = (event) =>{
        setText(event.target.value)
    }
    
    const changeTextUpper = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text changed to upper case","Success")
    }
    const changeTextLower = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text changed to lower case","Success")
    }
    const clearText = () =>{
        setText("")   
        props.showAlert("Text cleared","Success")
    }
    
    const removeExtraSpaces = () =>{
        setText(text.replace(/\s+/g,' ').trim())   
        props.showAlert("Extra spaces removed","Success")
    }
    
    const copyText = () =>{
        var copyText = document.getElementById("myBox");
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to clipboard","Success")
    }

    function isWord(str) {
        return str.length > 0;
    }

    return (
        // jsx fragment to wrap in single entity
        <div >
            <div className="container my-3"  style={{backgroundColor:props.navMode.bgColor, color:props.navMode.color}}>
                <h1>{props.heading}</h1>
                <label htmlFor="myBox" className="form-label my-3">{props.areaheading}</label>
                {/* here we have defined value of textarea to text (state) so we have */}
                {/* to write onchange event listener to update the text */}
                <textarea className="form-control" value={text} onChange={updateText} id="myBox" rows="8" style={{backgroundColor:props.navMode.bgColor, color:props.navMode.color, border:"1px solid black" ,borderColor:props.navMode.borColor}}></textarea>
                <button className="btn btn-primary my-3" onClick={changeTextUpper} style={{backgroundColor:props.navMode.butBgColor, color:props.navMode.butColor, borderColor:props.navMode.butColor}}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={changeTextLower} style={{backgroundColor:props.navMode.butBgColor, color:props.navMode.butColor, borderColor:props.navMode.butColor}}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary my-3" onClick={clearText} style={{backgroundColor:props.navMode.butBgColor, color:props.navMode.butColor, borderColor:props.navMode.butColor}}>Clear</button>
                <button type="button" className="btn btn-primary my-3 mx-3" onClick={removeExtraSpaces} style={{backgroundColor:props.navMode.butBgColor, color:props.navMode.butColor, borderColor:props.navMode.butColor}}>Remove extra spaces</button>
                <button type="button" className="btn btn-primary my-3 " onClick={copyText} style={{backgroundColor:props.navMode.butBgColor, color:props.navMode.butColor, borderColor:props.navMode.butColor}}>Copy</button>
            </div>
            <div className="container my-3" style={{backgroundColor:props.navMode.bgColor, color:props.navMode.color}}> 
                <h2>Your text summary</h2>
                <p>Total words {text.split(" ").filter(isWord).length} and character {text.length}</p>
                <p>Time to read the document is : {(0.008*text.split(" ").filter(isWord).length).toFixed(2)}</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
