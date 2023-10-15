// import van1 from "../assets/van1.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {

  const [vanResults, setVanResults] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

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

  console.log(vanResults && vanResults[0].type);

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
          to={`/vans/${van.id}`}
          key={van.id}
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
              className="simple-btn filter-btn"
              onClick={() => setSearchParams({type: "simple"})}
            >
              Simple
            </button>
            
            <button 
              className="luxury-btn filter-btn"
              onClick={() => setSearchParams({type: "luxury"})}
            >
              Luxury
            </button> 
            
            <button 
              className="rugged-btn filter-btn"
              onClick={() => setSearchParams({type: "rugged"})}
            >
              Rugged
            </button> 
            
            <button 
              className="clear-filter"
              onClick={() => setSearchParams({})}
            >
             Clear filters
            </button>
            
          </div>

          <section className="van-listings">
            {vanCard}
          </section>
        </main>

      </div>
    </>
  )
}
