import { Link } from "react-router-dom";
import manOnVan from "../assets/man-on-a-van.svg";

export default function AboutPage() {
  return (
    <>
      <div id="about-page">
        <div className="man-on-van">
          <img 
            src={manOnVan}
            className="about-hero-img"
          />
        </div>

        <main>
          <h1>
            Don&apos;t squeeze in a sedan when you could relax in a van.
          </h1>

          <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. 
            <br />
            (Hitch costs extra 😉)
            <br />
            <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>

          <div className="banner">
            <h2>
              Your destination is waiting.
            </h2>

            <h2>
                Your van is ready.
            </h2>

            <Link to="/van-listings">Explore our vans</Link>
          </div>
        </main>

      </div>
    </>
  )
}
