import React from 'react';
import './App.css';
import InputFeild from './components/InputFeild';


const App:React.FC =()=> {
  return(
  <div className="App">
    <div className="heading">Task Pulse</div>
    <InputFeild/>
  </div>
  );
}

export default App;
