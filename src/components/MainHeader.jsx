import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { activeStyles } from "./ActiveStyles";

import avatar from "../assets/user.svg";

export default function MainHeader() {

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

          <Link to="/login">
            <img 
              src={avatar} 
              alt="user avatar" 
              className="avatar"
            />
          </Link>
        </nav>
      </header>
    </>
  )
}
