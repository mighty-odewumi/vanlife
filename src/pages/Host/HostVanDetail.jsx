import { Link, Outlet, useParams, NavLink } from "react-router-dom";
import backIcon from "/assets/arrow.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { activeStyles } from "../../components/ActiveStyles";

export default function HostVanDetail() {

  const [hostVanDetail, setHostVanDetail] = useState(null);

  const params = useParams();
  const {id} = params;

  function fetchData() {
    axios.get(`/api/vans/${id}`)
      .then(response => {
        setHostVanDetail(response.data.vans);
      })
  }


  useEffect(() => {
    if (!hostVanDetail) {
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (!hostVanDetail) {
    return (
      "Fetching Data..."
    );
  }


  return (
    <>
      <div className="host-van-detail">
        <Link 
          to=".."
          relative="path"
        >
          <img src={backIcon} alt="arrow icon" className="back-icon"/>
          <span className="back-text">
            Back to all vans
          </span>
        </Link>

        <main>
          <div className="image-top-info">
            <img src="" alt="a van" />
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
            hostVanDetail={hostVanDetail}
          />

        </main>
      </div>
    </>
  )
}
