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
    }
    const changeTextLower = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clearText = () =>{
        setText("")   
    }

    const removeExtraSpaces = () =>{
        setText(text.replace(/\s+/g,' ').trim())   
    }

    const copyText = () =>{
        var copyText = document.getElementById("myBox");

        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copyText.value);
    }


    return (
        // jsx fragment to wrap in single entity
        <div style={props.TextStyle}>
            <div className="container my-3" style={props.TextStyle}>
                <h1>{props.heading}</h1>
                <label htmlFor="myBox" className="form-label my-3">{props.areaheading}</label>
                {/* here we have defined value of textarea to text (state) so we have */}
                {/* to write onchange event listener to update the text */}
                <textarea className="form-control" value={text} onChange={updateText} id="myBox" rows="8" style={props.TextStyle}></textarea>
                <button className="btn btn-primary my-3" onClick={changeTextUpper}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={changeTextLower}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary my-3" onClick={clearText}>Clear</button>
                <button type="button" className="btn btn-primary my-3 mx-3" onClick={removeExtraSpaces}>Remove extra spaces</button>
                <button type="button" className="btn btn-primary my-3 " onClick={copyText}>Copy</button>
            </div>
            <div className="container my-3" style={props.TextStyle}> 
                <h2>Your text summary</h2>
                <p>Total words {text.split(" ").length} and character {text.length}</p>
                <p>Time to read the document is : {(0.008*text.split(" ").length).toFixed(2)}</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
