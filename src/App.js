import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching data!', error);
      });
  }, []);
  
  return (
    <div className="App">
      
      <ul>
        {data.map(item => (
          <li key={item.user_id}>{item.name},{item.address}</li> // Adjust to your data structure
        ))}
      </ul>
    </div>
  );
}

export default App;
