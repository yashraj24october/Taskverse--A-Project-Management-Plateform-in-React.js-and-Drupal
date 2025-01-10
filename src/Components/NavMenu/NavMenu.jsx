import React from "react";
import './NavMenu.css'
import { Link } from "react-router-dom";

const NavMenu = ({className}) =>{
  return <nav className={`nav-menu ${className}`}>
  <ul>
    <li className="active-link"><Link to='/'>Home</Link></li>
    <li><Link to='/'>Dashboard</Link></li>
    <li><Link to='/'>Tasks</Link>
    <ul className="submenu">
      <li>Assigned Tasks</li>
      <li>My TODOs</li>
      <li>Generate Task Report</li>
      <li>My Reports</li>
    </ul>
    </li>
    <li><Link to='/'>Projects</Link>
    <ul className="submenu">
      <li>Add new project info</li>
      <li>Saved project infos</li>
      <li>Add project documentation</li>
      <li>Saved project documentations</li>
    </ul>
    </li>
    <li><Link to='/'>Issues</Link>
    <ul className="submenu">
      <li>Post New Questions/issues</li>
      <li>Saved Questions/Issues</li>
      <li>My Issues</li>
    </ul>
    </li>
    <li><Link to='/'>Code Library</Link>
    <ul className="submenu">
      <li>Add Useful Code Snippet</li>
      <li>View Code Library</li>
    </ul>
    </li>
  </ul>
  </nav>
}

export default NavMenu;