import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/App.js';
import Form from './components/Form.js';
import Preview from './components/preview.js';
import reportWebVitals from './reportWebVitals';

const Main = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    
    setMode((mode === 'light' ? 'dark' : 'light'));

    if (mode === 'light') {
      document.body.style.backgroundColor = '#32335b';
    }else{
      document.body.style.backgroundColor = 'white';
    }
    
  };

  const [text , setText] = useState("Enter Text Here");


  return (
    <React.StrictMode>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Form mode={mode} text={text} setText={setText}/>
      <Preview text={text} mode={mode}/>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

reportWebVitals();
