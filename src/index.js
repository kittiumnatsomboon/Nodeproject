import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './controller/App';
import reportWebVitals from './reportWebVitals';

let myloop = ()=>{
   const fruit = ["mango","banana","apple"]

   let text = "";
   for (let x of fruit) {
        if(x == "apple")break
        console.log(`ค่าในอาร์เรย์ ${x}`)
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    myloop()

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
