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
      (e) => {
        setData(e.target.value);
        fetch("/home/" + e.target.value)
          .then(response => response.json())
          .then(data => {setError(data.lastname)})
          
        }
      }
        
    </div>
  );
}

export default App;
