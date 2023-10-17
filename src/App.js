
import './App.css';
import axios from "axios";
import Table from "./components/Table";
import { useEffect, useState } from 'react';

function App() {
  const [coins, coinsState]= useState([]);
  const [search, searchState]= useState("");
  const getInfo = async () => {
  const response = await axios.get ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en");
    
  console.log (response);
  coinsState (response.data);
  };

  useEffect (() => {
    getInfo ();
  }, []); 

  return (
    <div className="container">
      <div className='row'> 
      <input type='text' placeholder='buscar moneda' className='form-control border-0 mt-4 text-center' onChange={e =>searchState(e.target.value) }/>
      <div className='mt-4'>
        <Table coins = {coins} search ={search}/>
      </div>
      </div>
    </div>
  );
}

export default App;
