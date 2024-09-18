import { Suspense } from "react";
import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom";
import backIcon from "/assets/arrow.svg";
import { getVanById } from "../../api";


// eslint-disable-next-line react-refresh/only-export-components
export function loader({ params }) {
  const {id} = params;
  return defer({ vanDetail: getVanById(id) });
}

export default function VanDetail() {
  
  const vanDetailPromise = useLoaderData();
  console.log(vanDetailPromise);

  const location = useLocation();

  const search = location.state.search;

  // Render van detail in Await
  function renderVanDetail(vanData) {
    console.log(vanData);

    const vanType = vanData.type || "";

    const upperCaseLetter = vanType.slice(0, 1).toUpperCase();

    const capitalized = upperCaseLetter + vanType.slice(1);

    const detail = (
      <>
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
      </>
    );

    return detail;
  }

  return (
    <>
      <div className="van-detail-container">
      
        <main>
          
          <Suspense fallback={
            <>
              <h3>Fetching Details...</h3>
            </>}
          >
            <Await resolve={vanDetailPromise.vanDetail}>
              {renderVanDetail}
            </Await>
          </Suspense>
          
        </main>

      </div>
    </>
  )
}
