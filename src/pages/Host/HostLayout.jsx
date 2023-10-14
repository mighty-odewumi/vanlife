import { Link } from "react-router-dom";

export default function HostLayout() {
  
  return (
    <>
      <nav>
        <Link to=".">
          Dashboard
        </Link>

        <Link to="income">
          Income
        </Link>

        <Link to="reviews">
          Reviews
        </Link>
      
      </nav>
    </>
  )
}
