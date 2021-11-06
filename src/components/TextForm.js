import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        settext(text.toUpperCase());
        props.showAlert('Text converted in uppercase', 'success');
    }
    const handleLoClick = ()=>{
        settext(text.toLowerCase());
        props.showAlert('Text converted in lowecase', 'success');

    }
    const handleClearClick = ()=>{
        settext("")
    }
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to clipboard', 'success');
    }
    const changeText = (event)=>{
        settext(event.target.value)
        }
    const [text, settext] = useState("")
    return (
     <>   
      <div className="container mb-3" style={{color:props.mode==="dark"?"white":"black"}}>
          <h2>{props.heading}</h2>
          <div className="mb-3">  
        <textarea className="form-control" value={text} onChange={changeText} style={{background:props.mode==="dark"?"#585858":"white", color:props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick} id="myBox">Copy Text</button>
      </div>
      <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
          <h1>Your Text Summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words, {text.length} character </p>
          <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length !==0}).length} read in minutes</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox above to preview here."}</p>
      </div>
      </>
    )
}
