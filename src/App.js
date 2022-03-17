import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  async function ApiData() {
    try {
      const response = await fetch('./data.json');
      const data = await response.json();
      const result = await data;
      console.log(result)
      return result;
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    const changeData = async () => {
      const response = await ApiData();
      console.log(response);
      setData(response)
    };
    changeData();
  }, []);

  return (
    <div className="App">
      <div className="logo"></div>
      <div className="content"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
