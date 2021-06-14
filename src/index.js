import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <header className="header pt-2" style={{backgroundColor:"rgb(36, 41, 46)", height:"15vh"}}>
            <div className="mt-2" style={{display:"flex"}}>
                <h3 className="ml-5" style={{color:"blueviolet", width:"200px"}}>User Avatar</h3>
                <a href="https://github.com/nikhil1610/defaultAvatar" target="/blank" className="mr-5" 
                   style={{textDecoration:"none", marginLeft:"auto", transform:"translate(10px, 10px)"}}>
                    Github
                </a>
            </div>
        </header>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);