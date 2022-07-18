import React from "react";
import HomeNav from "./Home_Nav";
import HomeRecommend from "./Home_Recommend";
import "./index.css";
function DianPingHome() {
  return (
    <div className="webApp-Home">
      <HomeNav />
      <HomeRecommend />
    </div>
  );
}
export default DianPingHome;
