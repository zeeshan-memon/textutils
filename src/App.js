import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
const [mode, setmode] = useState('light');
const toggleMode = ()=>{
  if(mode === 'light'){
    setmode('dark')
  }else{
    setmode('light')
  }
}
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter text for analyze below"/>
    </div>
    {/* <AboutUs/> */}
    </>
  );
}

export default App;
