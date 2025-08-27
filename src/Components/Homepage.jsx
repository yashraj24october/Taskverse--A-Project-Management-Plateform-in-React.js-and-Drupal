import React from "react";
import Header from "./Header/Header";
import BannerSection from "./BannerSection/BannerSection";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import AddProjectInfoForm from "./AddProjectInfoForm/AddProjectInfoForm";


const Homepage = () =>{
  return <>
   <Header/>
  <BannerSection/>
  <div className="features-list-wrapper">
  <div className="container">
  <marquee>
  <ul className="features-list">
      <li><strong>Organize and Assign Tasks</strong></li>
      <li><strong>Track Progress and Reports</strong></li>
      <li><strong>Collaborate on Projects</strong></li>
      <li><strong>Resolve Issues Seamlessly</strong></li>
    </ul>
</marquee>
    </div>
    </div>
  {/* <AddTaskForm/> */}
  </>
}

export default Homepage;