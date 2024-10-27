import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App , { Myform,ItemList }from './controller/App';
import reportWebVitals from './reportWebVitals';

const items = ['Apple', 'Banana', 'Cherry'];



const car_obj = ReactDOM.createRoot(document.getElementById('call'));

car_obj.render(<ItemList items={items} />)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
