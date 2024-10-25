import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './controller/App';
import reportWebVitals from './reportWebVitals';

// let Employee = (fname,lname)=> fname , lname
// let Employee = (Ename,Elasname)=>alert( Elasname + Ename )

  const customer = {
      cusmername : "กิตติ",
      cusmer_lastname : "อำนาจสมบูรณ์",
      cusmer_add : {
        county : "thailand",
        zipcode : 18120,
        code_h : 20/7
      },
      showdata(){
          console.log("แสดงข้อมูลลูกค้า")
          console.log(customer.cusmername)
          console.log(customer.cusmer_lastname)
          
      }
  }
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    console.log(customer.showdata())
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
