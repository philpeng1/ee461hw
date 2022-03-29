import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'


function App() {
   const [data, setData] = useState(null)
   const [name, setCheck] = useState(false)

   function returnData(val){
     setData(val.target.value)
     if(val.target.value == 'phil'){
     setCheck(true)
   }
   else{
     setCheck(false)
   }
  }
  return (
    <div className="App">{
      name?
      <h1>peng</h1>
      :
      <h1> type phil</h1>

    }
    <input type = 'text' onChange = {returnData}/>
    
    </div>
  );
}

export default App;
