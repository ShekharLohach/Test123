import React from "react";
import "styles/home/header.css";

const Header = ({markdownObject}: any) => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>
          <span className="header-content-word-shaking">Shaking up</span>
          <br />
          community building & sport financing
        </h1>
        <div className="download-btns">
          <img
            src="/images/home/google-play-btn.svg"
            alt=""
            style={{ marginRight: "5px" }}
          />
          <img src="/images/home/app-store-btn.svg" alt="" />
        </div>
        <p>coming soon</p>
      </div>

      <div className="header-img">
        <img src="/images/home/top-header-img.svg" alt="" />
      </div>
    </div>
  );
};

export default Header;
