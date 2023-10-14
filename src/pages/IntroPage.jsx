import { Link } from "react-router-dom";


export default function IntroPage() {
  return (
    <>
      <div id="intro-page">
        <main>
          <h1>You got the travel plans, we got the travel vans.</h1>

          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>

          <Link to="/vans" className="cta-btn">Find your van</Link>
        </main>

      </div>
    </>
  )
}
