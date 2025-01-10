import React from "react";
import './Logo.css'
import LogoImgSrc from '../../../assets/logo-image.png'
import { Link } from "react-router-dom";

const Logo = () =>{
  return <div className="logo">
  <Link to='/'><img src={LogoImgSrc} alt='logo-img'/></Link>
  </div>
}

export default Logo;