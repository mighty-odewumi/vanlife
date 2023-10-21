import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import backIcon from "/assets/arrow.svg";

export default function VanDetail() {
  
  const [vanData, setVanData] = useState([]);

  const params = useParams();

  const location = useLocation();
  console.log(location);

  const search = location.state.search;

  const vanType = vanData?.type || "";

  const upperCaseLetter = vanType.slice(0, 1).toUpperCase();

  const capitalized = upperCaseLetter + vanType.slice(1);

  function fetchDataById() {
    try{
      axios.get(`/api/vans/${params.id}`)
        .then(response => {
          console.log(response.data);
          setVanData(response.data.vans);
        })
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDataById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id])

  return (
    <>
      <div className="van-detail-container">
      
        <main>
          
          <Link 
            to={
              `${search 
                ? ".." + search
                : ".."
              }`
            }
            relative="path"
          >
            <img src={backIcon} alt="arrow icon" className="back-icon"/>
            <span className="back-text">
              Back to {capitalized} vans
            </span>
          </Link>

          <section>
            <img src={vanData.imageUrl} alt="a van" className="van-detail-main-img"/>

            <button className={
              `van-tag ${vanData.type}-btn ${vanData.type}-btn-selected`
              }>
              {vanData.type}
            </button>

            <h2>{vanData.name}</h2>
            <span >
              <span className="detail-price">
                ${vanData.price}
              </span>
              /day
            </span>

            <p>{vanData.description}</p>

            <button className="rent-cta">
              Rent this van
            </button>
          </section>

        </main>

      </div>
    </>
  )
}
