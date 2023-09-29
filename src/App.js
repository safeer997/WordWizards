
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';


function App() {

  const[mode,setMode]=useState("light");

  const toggleMode=()=>{
    if(mode==='light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#2e5c85'
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading = "Enter Your Text Here !" mode={mode}/>
    {/* <About/> */}
    

    </>
    );
}

export default App;
