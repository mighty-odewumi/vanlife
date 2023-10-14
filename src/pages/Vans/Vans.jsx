// import van1 from "../assets/van1.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Vans() {

  const [vanResults, setVanResults] = useState(null);

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

  console.log(vanResults);

  useEffect(() => {
    if (!vanResults) {
      fetchVans();
    }
  })

  if (!vanResults) {
    return "Fetching data...";
  }

  const vanCard = vanResults.map(van => {
    return (
      <>
        <Link to={`/vans/${van.id}`}>
          <div 
            className="van-card"
            key={van.id}
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
            <button className="simple-btn filter-btn">
              Simple
            </button>

            <button className="luxury-btn filter-btn">
              Luxury
            </button>

            <button className="rugged-btn filter-btn">
              Rugged
            </button>

            <button className="clear-filter">
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
