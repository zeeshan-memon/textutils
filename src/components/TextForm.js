import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        settext(text.toUpperCase())
    }
    const handleLoClick = ()=>{
        settext(text.toLowerCase())
    }
    const handleClearClick = ()=>{
        settext("")
    }
    const changeText = (event)=>{
        settext(event.target.value)
        }
    const [text, settext] = useState("")
    return (
     <>   
      <div className="container mb-3">
          <h2>{props.heading}</h2>
          <div className="mb-3">  
        <textarea className="form-control" value={text} onChange={changeText} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").length} words, {text.length} character </p>
          <p>{0.008 * text.split(" ").length} read in minutes</p>
          <h2>Preview</h2>
          <p>{text}</p>
      </div>
      </>
    )
}
