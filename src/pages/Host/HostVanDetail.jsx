import { Suspense } from "react";
import { Link, Outlet, NavLink, useLoaderData, defer, Await } from "react-router-dom";
import backIcon from "/assets/arrow.svg";
import { activeStyles } from "../../components/ActiveStyles";
import { getVanById } from "../../api";
import { requireAuth } from "../../utils";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params, request }) {
  const { id } = params;
  await requireAuth(request);
  return defer({ hostVanDetail: getVanById(id) });
}

export default function HostVanDetail() {

  const hostVanDetailPromise = useLoaderData();

  function renderHostVanDetail(hostVanDetail) {
    
    const detail = (
      <main>
        <div className="image-top-info">
          <img src={hostVanDetail.imageUrl} alt="a van" />
          <div className="host-van--top-info">  
            <button className={`van-tag ${hostVanDetail.type}-btn ${hostVanDetail.type}-btn-selected`}>
              {hostVanDetail.type}
            </button>

            <h2>{hostVanDetail.name}</h2>
            <span>${hostVanDetail.price}</span>/day
          </div>
        </div>

        <div className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({isActive}) => isActive ? activeStyles : null}
          >
            Details
          </NavLink>

          <NavLink
            to="pricing"
            style={({isActive}) => isActive ? activeStyles : null}
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            style={({isActive}) => isActive ? activeStyles : null}
          >
            Photos
          </NavLink>
        </div>

        <Outlet 
          context={{ hostVanDetail }}
        />
      </main>
    );

    return detail;
  }

  return (
    <>
      <div className="host-van-detail">
        <Link 
          to=".."
          relative="path"
        >
          <img src={backIcon} alt="arrow icon" className="back-icon" />
          <span className="back-text">
            Back
          </span>
        </Link>

        <Suspense fallback={
          <>
            <br />
            <h3>Fetching Details...</h3>
          </>}
        >
          <Await resolve={hostVanDetailPromise.hostVanDetail}>
            {renderHostVanDetail}
          </Await>
        </Suspense>
        
      </div>
    </>
  )
}
