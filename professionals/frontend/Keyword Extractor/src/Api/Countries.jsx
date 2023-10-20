import React from "react";
import { useState, useEffect } from "react";
import styles from "./card.module.css"
// import CardDetail from "./CardDetail";


const Countries = () => {
     const [error, setError] = useState(null);
     const [isLoaded, setIsLoaded] = useState(false);
     const [items, setItems] = useState([]);
     useEffect(() => {
          fetch("https://restcountries.com/v3.1/all")
              .then((res) => res.json())
              .then(
                  (result) => {
                      setIsLoaded(true);
                      setItems(result);
                  },
                  (error) => {
                      setIsLoaded(true);
                      setError(error);
                  }
              );
      }, []);
      if (error) {
          return <>{error.message}</>;
      } else if (!isLoaded) {
          return <>loading...</>;
      } else {
     return(
          <>
          <div className={styles.container}>
            {items.map((item) => (
              <div className="card " key={item.name.official}>
                <img className="card-img" src={item.flags.png} alt={item.capital}/>
                {/* <CardDetail items={items} /> */}
                <div className="card-body">
                  <h1 className={styles.card_Text}>{item.name.common}</h1>
                  <p className="card-text">Capital: {item.capital}</p>
                  <p className="card-text">Population: {item.population}</p>
                </div>
              </div>
            ))}
        </div>
            </>
)}
}
export default Countries;
