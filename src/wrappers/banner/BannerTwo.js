import PropTypes from "prop-types";
import React from "react";
// import bannerData from "../../data/banner/banner-two.json";
import BannerTwoSingle from "../../components/banner/BannerTwoSingle.js";
import { useSelector } from "react-redux";

const BannerTwo = ({ spaceTopClass, spaceBottomClass }) => {
  const bannerData = useSelector((state) => state?.productData?.banner_2) || [];
  return (
    <div
      className={`banner-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return <BannerTwoSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

BannerTwo.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default BannerTwo;
