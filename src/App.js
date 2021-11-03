import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
const [mode, setmode] = useState('light');
const [alert, setAlert] = useState(null);
const [color, setColor] = useState('white');
const [colorPicker, setColorPicker] = useState(false);
const showAlert = (message, type)=>{
  setAlert({
    message:message,
    type:type
  });
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}
const toggleMode = ()=>{
  if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor = '#030a2a';
    showAlert("Dark mode has been enabled","success");
  }else{
    setmode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
  }
  
}
const showColorPicker = ()=>{
  setColorPicker(colorPicker => !colorPicker); 
}
const setColorPickerColor = (color)=>{
  setColor(color); 
  document.body.style.backgroundColor = color;
}
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} showColorPicker={showColorPicker} colorPicker={colorPicker} setColorPickerColor={setColorPickerColor} color={color}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter text for analyze below" mode={mode} showAlert={showAlert}/>
    </div>
    {/* <AboutUs/> */}
    </>
  );
}

export default App;
