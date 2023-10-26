import { Suspense } from "react";
import { Outlet, useLoaderData, defer, Await } from "react-router-dom";
import star from "/assets/star.svg";
import { getHostVans } from "../../api";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  return defer({ dashboardVans: getHostVans()});
}

export default function Dashboard() {

  const dashboardVanPromise = useLoaderData();

  // Renders Dashboard Vans in Await
  function renderDashBoardVans(dashboardVans) {

    const vanListCard = dashboardVans.map(van => { 
      return (
        <div 
          className="dashboard-van-listing"
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

    return vanListCard;
  }

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

            <Suspense fallback={
              <>
                <br />
                <h3>Loading host vans...</h3>
              </>}
            >
              <Await resolve={dashboardVanPromise.dashboardVans}>
                {renderDashBoardVans}
              </Await>
            </Suspense>
            
          </div>
        </main>
      </div>
    </>
  )
}
