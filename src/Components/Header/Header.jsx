import React from "react";
import './Header.css'
import Logo from "../BannerSection/Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
import SecondaryMenu from "../NavMenu/SecondaryMenu/SecondaryMenu";
import AccountMenu from "../NavMenu/AccountMenu/AccountMenu";
import CurrentDateNotification from "../CurrentDateNotification/CurrentDateNotification";

const Header = () =>{
  return <header>
  <div className="container">
  <div className="row">
    <div className="col-sm-3">
      <Logo/>
    </div>
    <div className="col-sm-6">
      <NavMenu className='desktop-menu'/>
    </div>
    <div className="col-sm-3 right-menu">
      <AccountMenu/>
    </div>

  </div>
 
  </div>
  <div className="header-bottom">
  <div className="container">
  <CurrentDateNotification/>
    <SecondaryMenu/>
    </div>
  </div>
  </header>
}

export default Header;