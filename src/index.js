import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './controller/App';
import reportWebVitals from './reportWebVitals';


let myfunctions = (customeradd = "กรุงเทพ",nickname,age_number)=>{
    let address = `ที่อยู่ปัจจุบัน ${customeradd} ชื่อเล่น ${nickname} อายุ ${age_number}`
    return address
}
let myfunction = (nickname,age_number,customeradd = "กรุงเทพ")=>{
    let address = `ชื่อเล่น ${nickname} อายุ ${age_number}`
    return address
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    myfunctions("sss",28)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
