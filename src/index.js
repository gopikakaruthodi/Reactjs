import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const stl={color:"blue",backgroundColor:"yellow"}
const a=10
const root = ReactDOM.createRoot(document.getElementById('root'));
// const a=<h1>hello</h1>
root.render(
    // a
    // <h1>hellooi</h1>
    // React.createElement("h1",{id:"main"},"hai all")
    // React.createElement("div",{id:"main"},React.createElement("p",{id:"para"},"welcome"))

    //*  in react class is className, label for is htmlFor
    // <>
    //   <h1 className='head'>hello</h1>
    //   <label htmlFor='name'>Name: </label>
    //   <input type='text'  id='name' placeholder='name'/>
    // </>
// style 
        <>
          {/* <h1 style={{color:"blue",backgroundColor:"yellow"}}>{a}</h1> */}
          <h1 className='head'>{a}</h1>
          <label htmlFor='name'>Name: </label>
          <input type='text'  id='name' placeholder='name'/>
        </>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
