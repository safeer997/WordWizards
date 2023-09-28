import React , {useState} from 'react'



export default function TextForm(props) {

    const [text,setText]=useState('Enter Your Text Here');

    const handleUpClick = ()=>{
      //  console.log("upper case was clicked "+text);
        let newText = text.toUpperCase();
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
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>

   </div>
</>
  )
}
