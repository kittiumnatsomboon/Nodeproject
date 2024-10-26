import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './controller/App';
import reportWebVitals from './reportWebVitals';


const newarr = [10,20,30]
const newarre = [40,50,60]
const newarrs = [...newarr,...newarre]

const newarrb = [1,2]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    console.log(newarrs),
    console.log(newarrb.push(500))

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
