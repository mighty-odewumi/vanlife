import { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";


// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ request }) {
  await requireAuth(request);
  return defer( { hostVans: getHostVans() });
}

export default function HostVanList() {

  const hostVansPromise= useLoaderData();

  console.log(hostVansPromise);

  // Renders hostVans in an Await
  function renderHostVans(hostVans) {
    console.log(hostVans);

    const vanListCard = hostVans.map(van => {
      return (
        <Link to={van.id}
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

    return (
      vanListCard
    );
  }
  
  return (
    <>
      <div className="host-van-list-wrapper">
        <main>
          <h2>Your listed Vans</h2>

          <Suspense fallback={
            <>
              <br />
              <h3>Loading host vans...</h3>
            </>}
          >
            <Await resolve={hostVansPromise.hostVans}>
              {renderHostVans}
            </Await>
          </Suspense>
        </main>
      </div>
    </>
  )
}
