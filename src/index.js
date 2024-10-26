import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './controller/App';
import reportWebVitals from './reportWebVitals';


 let summation = (...numberarr)=>{
    let total = 0
    for(let number of numberarr) console.log(total += number)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   summation(4,5)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
