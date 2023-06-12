import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)



  let showAlert = (message, status) => {
    setalert({
      msg: message,
      stu: status
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#153351";
      document.body.style.color = "white";
  
      // Check if textarea element exists before accessing its style properties
      const textareaElement = document.getElementById('textarea');
      if (textareaElement) {
        textareaElement.style.backgroundColor = "white";
        textareaElement.style.color = 'black';
      }
  
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
  
      // Check if textarea element exists before accessing its style properties
      const textareaElement = document.getElementById('textarea');
      if (textareaElement) {
        textareaElement.style.backgroundColor = '#77AEB2';
      }
  
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtiles" aboutText="About" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter Text to Analyze" showAlert={showAlert} />} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

