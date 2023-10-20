import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import style from "./card.module.css"
const Search = (items) => {
  // useState for searching
  const [input, setInput] = useState([]);
  const [result , setResult] = useState([]);
  const [loading, setloading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchCountry = e.target[0].value;
    const request = `https://restcountries.com/v3.1/name/${searchCountry}?fullText=true`
      axios.get(request)
      .then(response =>{
        setloading(false)
        setResult(response.data[0])
        console.log(response.data[0])
      }).catch(err=>{
        setloading(true)
        alert("Error occured")
        console.log(err);
    })
  }
  return (
    <div className="wrapper">
      <div className={style.inputSearch} >
        <form action="" onSubmit={handleSubmit}>

          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              />
            <button className="sr-only"> Search </button>
          </label>
        </form>
      </div>
        <h1>{result.name.official}</h1>
        <h1>Capital : {result.capital[0]}</h1>
        <h1>Borders :)  {result.borders.map(bord=> <li key={bord}>{bord}</li>)}</h1>
        <img src={result.flags.png} alt={result.flags.alt} />
      { loading && (
              <div>
              <h2>{result.name.common}</h2>
              <h3>{result.region}</h3>
              </div>
              )
            } 
    </div>
  )
}

export default Search