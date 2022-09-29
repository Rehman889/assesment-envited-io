import React from "react";
import MiddleTitle from "../Component/MidTitle";

const Landing = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="top">
          <div className="top-left">
            <p>9:41</p>
          </div>
          <div className="top-right">
            <img src="bar4.svg" alt="" />
            <img src="wifi.svg" alt="" />
            <img src="charge.svg" alt="" />
          </div>
        </div>
        <MiddleTitle />
        <div className="page-assets">
          <img className="image1" src="landing-page-image-asset.svg" alt="" />
        </div>
        <div className="event-btn">
          <a href="/events">
            <button className="btn-style">🎉 Create my event</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
