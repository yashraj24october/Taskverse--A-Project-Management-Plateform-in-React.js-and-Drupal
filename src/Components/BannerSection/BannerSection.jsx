import React from "react";
import './BannerSection.css'
import bannerImg from '../../assets/BannerImg.png'
import { Link } from "react-router-dom";
const BannerSection = () =>{
  return <section className="banner-section container">
<div className="row">
  <div className="col-sm-7">
  <div className="banner-content">
    <h1>Empowering workflows at your <span>fingertips</span></h1>
    <p>🚀 Streamline tasks. 🤝 Collaborate efficiently. 📈 Deliver excellence.</p>
    <p>
      Discover a comprehensive task and project management solution designed 
      to enhance productivity and simplify work processes.
    </p>
    <button className="get-started-btn">
    <Link to='/getting-started/introduction'>Get Started </Link>
    </button>
  </div>
  </div>

  <div className="col-sm-5 banner-image">
<img src={bannerImg} alt='banner-img'/>
  </div>
</div>
  </section>
}

export default BannerSection;