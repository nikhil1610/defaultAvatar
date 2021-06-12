import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
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

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
