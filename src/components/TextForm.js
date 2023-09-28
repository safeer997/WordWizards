import React , {useState} from 'react'



export default function TextForm(props) {

    const [text,setText]=useState('');

    const handleUpClick = ()=>{
      //  console.log("upper case was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
       
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const handleOnChange = (event)=>{
      //  console.log("on change");
    
       // setText(" "); (this will not work as expected!)
        setText(event.target.value);
    }

  return (
<>
   <div className="container my-3" >
        <h1>{props.heading}</h1>
        <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>

   </div>
   <div className="container my-3" >
        <h2>Your Text Summary</h2>
        {/* <p>{text.split(" ").length} Words and {text.length} Characters</p> */}
        <p>{text.split(' ').filter(word => word !== '').length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(' ').filter(word => word !== '').length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>

   </div>
</>
  )
}
