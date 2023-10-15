import { Outlet } from "react-router-dom";
import star from "/assets/star.svg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {

  const [hostVanList, setHostVanList] = useState(null);

  function fetchData() {
    axios.get(`/api/vans/`)
      .then(response => {
        setHostVanList(response.data.vans);
      })
  }

  useEffect(() => {
    if (!hostVanList) {
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!hostVanList) {
    return (
      "Fetching Data..."
    );
  }

  const vanListCard = hostVanList.map(van => { 
    return (
      <div className="dashboard-van-listing"
        key={van.id}
      >
        <div className="dashboard-van-listing-left">
          <img src={van.imageUrl} alt="a van" />
          <div className="van-name--price">
            <h3>{van.name}</h3>
            <span>${van.price}/day</span>
          </div>
        </div>

        <span className="dashboard-van-listing-right">Edit</span>
      </div>
    )
  });

  
  return (
    <> 
      <Outlet />
     
      <div className="dashboard">
        <main>
          <div className="welcome">
            <div className="dashboard-left">

              <h2>Welcome!</h2>
              <p>Income last <span className="income-days">30 days</span></p>

              <span className="dashboard-amount">$2,260</span>
            </div>

            <span className="details-right">Details</span>

          </div>

          <div className="dashboard-review">
            <div className="dashboard-review-left">
              
              <h4>Review score</h4>

              <img src={star} alt="a star" className="star-icon"/>
              <span><span className="review-count">5.0</span>/5</span>
            </div>

            <span className="details-right">Details</span>
          </div>

          <div className="dashboard-listed">
            <div className="dashboard-listed-top">
              <h4>Your listed vans</h4>
              <span>View all</span>
            </div>

            {vanListCard}
            
          </div>
        </main>
      </div>
    </>
  )
}
