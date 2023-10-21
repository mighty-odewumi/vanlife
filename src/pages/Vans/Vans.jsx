import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";


export default function Vans() {

  const [vanResults, setVanResults] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  function fetchVans() {
    try {
      axios.get("/api/vans")
        .then(response => {
          console.log(response.data.vans);
          setVanResults(response.data.vans);
        });
    }
    catch (error) {
      console.log(error);
    }
  }

  // Function to handle filters for links
  /* function genNewSearchParamsString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    }
    else {
      sp.set(key, value);
    }

    return `?${sp.toString()}`;
  } */


  // Function to handle filters for buttons
  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key);
      }
      else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }

  useEffect(() => {
    if (!vanResults) {
      fetchVans();
    }
  })

  if (!vanResults) {
    return "Fetching data...";
  }

  const filteredVans = (typeFilter 
    ? vanResults.filter((van) => {
        return typeFilter === van.type 
    })
    : vanResults
  );

  
  const vanCard = filteredVans.map(van => {
    return (
      <>
        <Link 
          to={van.id}
          key={van.id}
          state={{ search: `?${searchParams.toString()}` }}
        >
          <div 
            className="van-card"
            
          >
            <img src={van.imageUrl} alt="a van" />

            <div className="van-info">

              <div className="van-tag-title">
                <h3>{van.name}</h3>  
                <button className={`van-tag ${van.type}-btn ${van.type}-btn-selected`}>
                  {van.type}
                </button>
              </div>
              
              <p>
                <span className="van-price">${van.price}</span> 
                <span>
                  /day
                </span>
              </p>
            </div>

          </div>
        </Link>
      </>
    )
  }); 

  return (
    <>
      <div id="vans">

        <main>
          <h1>
            Explore our van options
          </h1>

          <div className="filter-btns">
            <button
              className={
                `simple-btn filter-btn 
                ${typeFilter === "simple" && "simple"}-btn-selected`}
              onClick={() => handleFilterChange("type", "simple")}
            >
              Simple
            </button>
            
            <button 
              className={
                `luxury-btn filter-btn 
                ${typeFilter === "luxury" && "luxury"}-btn-selected`}
              onClick={() => handleFilterChange("type", "luxury")}
            >
              Luxury
            </button> 
            
            <button 
              className={
                `rugged-btn filter-btn 
                ${typeFilter === "rugged" && "rugged"}-btn-selected`}
              onClick={() => handleFilterChange("type","rugged")}
            >
              Rugged
            </button> 
            
            {typeFilter 
              ? (
                <button 
                  className="clear-filter"
                  onClick={() => setSearchParams({})}
                >
                  Clear filters
                </button> 
                )
              : null
            }
            
          </div>

          <section className="van-listings">
            {vanCard}
          </section>
        </main>

      </div>
    </>
  )
}
