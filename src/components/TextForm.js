import React , {useState} from 'react'


export default function TextForm(props) {
   

    const [text,setText]=useState('');

    const handleUpClick = ()=>{
      //  console.log("upper case was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
        
        
    }
    const handleLoClick = ()=>{
       
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }
    
    const handleOnChange = (event)=>{
      //  console.log("on change");
    
       // setText(" "); (this will not work as expected!)
        setText(event.target.value);
    }
    
    const handleRemoveSpacesClick = () => {
        // Remove extra spaces using a regular expression
        const cleanedText = text.replace(/\s+/g, ' ');
        setText(cleanedText);
        props.showAlert("Extra spaces removed","success")
    }
    
    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Text area cleared","success")
    }

  return (
<>
   <div className="container my-3" style={{color:props.mode==='dark'?'white':'#2e5c85'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3"  style={{color:props.mode==='dark'?'white':'#2e5c85'}}> 
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'darkgrey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpacesClick}>Remove space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>

   </div>
   <div className="container my-3" style={{color:props.mode==='dark'?'white':'#2e5c85'}} >
        <h2>Your Text Summary</h2>
        {/* <p>{text.split(" ").length} Words and {text.length} Characters</p> */}
        <p>{text.split(' ').filter(word => word !== '').length} Words and {text.length} Characters</p>
        {/* <p>{0.008*text.split(' ').filter(word => word !== '').length.toFixed(1)} Minutes Read</p> */}
        <p>{((0.008 * text.split(' ').filter(word => word !== '').length)).toFixed(1)} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>

   </div>
</>
  )
}
