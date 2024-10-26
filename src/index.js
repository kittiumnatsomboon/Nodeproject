import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './controller/App';
import reportWebVitals from './reportWebVitals';

const product = {
    product_name :"computer",
    product_price : 15000,
    product_type : "c"
}
const {product_name,product_price} = product
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   console.log("สินค้า" + product_name + "ราคา " + product_price)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
