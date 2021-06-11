// import logo from './logo.svg';
import React, {useState} from 'react';
import Identicon from 'react-identicons';
import './App.css';

function App() {
  const [input, setInput] = useState("github") ;
  return (
    <React.Fragment>
    <link rel="stylesheet"  
     href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    ></link>
  <div className="container" style={{backgroundColor:"rgb(0,0,0)"}}>   
    <div className="input mt-5">
      <label>Enter any value:</label>
      <span>
        <input type="text" placeholder="Enter anything..." value={ input } onChange={(e)=>{setInput(e.target.value)}}/>
      </span>
    </div> 
    <div className="default-avatar container mt-3">
      <div className="identicon" style={{float:"left"}}>
        <Identicon string={input} size={200}/>
      </div>
      <div className="robohash" style={{float:"right"}}>
        {/* {console.log(input)} */}
        <img src={`https://robohash.org/${input}.png`}
         style={{height:"200px", width: "200px"}}
        />

      </div>

    </div>
  </div>
  </React.Fragment>
  );
}

export default App;
