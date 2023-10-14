import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";


export default function MainHeader() {

  const activeStyles = {
    fontWeight: "bold",
    color: "#161616",
    textDecoration: "underline",
  };

  return (
    <>
      <header>
        <NavLink to="/">
          <div className="logo">
            <img 
              src={logo} 
              alt="logo" 
              className="logo"
            />
          </div>
        </NavLink>

        <nav>
          <NavLink 
            to="/host" 
            className="active-nav"
            style={({isActive}) => isActive ? activeStyles : null}
          >
            Host
          </NavLink>
          <NavLink 
            to="/about" 
            className="active-nav"
            style={({isActive}) => isActive ? activeStyles : null}
          >
            About
          </NavLink>

          <NavLink 
            to="/vans"
            className="active-nav"
            style={({isActive}) => isActive ? activeStyles : null}
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </>
  )
}
