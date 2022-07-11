import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { SpinLoading } from "antd-mobile";
import "./App.css";
const DianPingCity = lazy(() => import("./pages/DianPing_City"));
const DianPingHome = lazy(() => import("./pages/DianPing_Home"));
const DianPingSearch = lazy(() => import("./pages/DianPing_Search"));
const DianPingUser = lazy(() => import("./pages/DianPing_User"));
const DianPingGoodDetail = lazy(() => import("./pages/DianPing_Good_Detail"));
const DianPingTweetDetail = lazy(() => import("./pages/DianPing_Tweet_Detail"));
const DianPing404 = lazy(() => import("./pages/DianPing_404"));

function App() {
  return (
    <Suspense
      fallback={
        <SpinLoading
          className="route-spinloading"
          color="primary"
          style={{
            "--size": "32px",
          }}
        />
      }
    >
      <Routes>
        <Route index element={<DianPingHome />}></Route>
        <Route path="city/" element={<DianPingCity />}></Route>
        <Route path="user/" element={<DianPingUser />}></Route>
        <Route path="good_detail/" element={<DianPingGoodDetail />}></Route>
        <Route path="tweet_detail/" element={<DianPingTweetDetail />}></Route>
        <Route path="/:city" element={<DianPingSearch />}></Route>
        <Route path="home/" element={<DianPingHome />}></Route>
        <Route path="*" element={<DianPing404 />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
