import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'


function App() {
   const [data, setData] = useState(null)
   const [name, setCheck] = useState(false)
   const [error, setError] = useState("ERROR: User Not Found");

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
    <div className="App">
      {
      name?
      <h1> peng</h1>
      :
      <><><h1>type phil - ERROR: User Not Found</h1>
      <input type="text" onChange={returnData} />
      </><input id="username" type="text" value={data} onChange={(e) => {
            setData(e.target.value);
              //fetch("http://127.0.0.1:5000/home/" + e.target.value)
              fetch("/home/" + e.target.value)
              .then(response => response.json())
              .then(data => { setError(data.lastname); })
              .catch(error => { setError(error); });
          } } /></>
    }
    </div>   
  
  
  );
}

export default App;
