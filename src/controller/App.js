import logo from '../logo.svg';
import '../App.css'
import { render } from '@testing-library/react';
import React from 'react';


export class Myform extends React.Component{
    render(){
        return
    }
}
export const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}
          ddd
        </div>
      ))}
    </div>
  );
};

export default Myform;
