import {useState} from 'react';
import Identicon from 'react-identicons';
import {Button, Form} from 'semantic-ui-react';
import styles from './App.css';

function App() {
  const [input, setInput] = useState("") ;
  const [val, setVal] = useState("github");
  return (
  <div className="container">   
    <div className="input mt-5">
      {/* <h4>Enter any value:</h4>
      <input type="text" placeholder="Enter anything..." value={ input } onChange={(e)=>{setInput(e.target.value)}}/>
      <button className="ml-3" style={{ backgroundColor:'green'}} onClick={()=>setVal(input)}>Generate </button> */}
      <Form>
      <label>Enter any value</label>
        <Form.Field inline>
          {console.log(styles)}
        <input className="inputText" type="text" placeholder="Enter anything..." value={ input } onChange={(e)=>{setInput(e.target.value)}} />
        <Button  color="green" onClick={()=>setVal(input)}>Generate </Button> 
        </Form.Field>
      </Form>
    </div> 
    <div className="default-avatar container" style={{marginTop:"50px", height:"fit-content"}}>
      <div className="identicon" style={{float:"left", transform: "translate(20%, 2%)"}} >
        <Identicon string={val} size={200}/>
      </div>
      <div className="robohash" style={{float:"right", transform: "translate(-25%, 2%)"}}>
        {/* {console.log(input)} */}
        <img src={`https://robohash.org/${val}.png`}
         alt="robohash" style={{height:"200px", width: "200px"}}
        />
      </div>

    </div>
  </div>
  );
}

export default App;
