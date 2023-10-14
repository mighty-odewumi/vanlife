import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVanList() {

  const [hostVanList, setHostVanList] = useState(null);

  function fetchData() {
    axios.get(`/api/vans/`)
      .then(response => {
        setHostVanList(response.data.vans);
      })
  }

  console.log(hostVanList);

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
      <Link to={`/host/vans/${van.id}`}
        key={van.id}
      >
        <section>
          <div className="host-van-list">
            <img src={van.imageUrl} alt="a van" />

            <div className="host-van-list--name-price">
              <h3>{van.name}</h3>
              <span>${van.price}/day</span>
            </div>
          </div>
        </section>
      </Link>
    )
  });

  console.log(vanListCard);

  return (
    <>
      <div className="host-van-list-wrapper">
        <main>
          <h2>Your listed Vans</h2>

          {vanListCard}
        </main>
      </div>
    </>
  )
}
