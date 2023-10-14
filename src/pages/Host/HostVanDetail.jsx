import { Link, useParams } from "react-router-dom";
import backIcon from "/assets/arrow.svg";
import axios from "axios";
import { useEffect, useState } from "react";

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
            <Link>
              Details
            </Link>

            <Link>
              Pricing
            </Link>

            <Link>
              Photos
            </Link>
          </div>

          <div className="host-van-detail--details">
       
            <p><span>Name: </span>{hostVanDetail.name}</p>

            <p><span>Category: </span>{hostVanDetail.type}</p>

            <p><span>Description: </span>{hostVanDetail.description}</p>

            <p><span>Visibility: </span>Public</p>
          </div>
        </main>
      </div>
    </>
  )
}
