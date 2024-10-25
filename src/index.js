import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './controller/App';
import reportWebVitals from './reportWebVitals';

const calculate = (sum , sam )=>{
    let total = sum + sam
    if(sum <= sam){
         
       return console.log("ค่า sum มากกว่า sam" + total)
    }else{
        console.log("ค่า sam มากกว่า sum")
    }
}
let xfunction = (x , y)=>{
    const z = x + y
    return z
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  calculate(100 , 10),
  
);
const call = ReactDOM.createRoot(document.getElementById('call'));
call.render(
  xfunction(156 , 165)
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
