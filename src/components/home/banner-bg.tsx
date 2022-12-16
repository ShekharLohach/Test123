import React from "react";
import "styles/home/banner-bg.css";

const BannerBg = ({ markdownObject }: any) => {
  return (
    <div className="banner-bg">
      <div>
        <p className="banner-bg-line1">
          {markdownObject.bannerBgQuote}
          {/* &quot;We focus on a safe and inspiring digital environment,
          <br /> with groundbreaking income sources for athletes and clubs.
          <br /> We are creating a new universe for every sports fan on the
          planet&quot; */}
        </p>
        <p className="banner-bg-line2">
          {markdownObject.bannerBgName},
          <br />
          {markdownObject.bannerBgPosition}
        </p>
      </div>
    </div>
  );
};

export default BannerBg;
