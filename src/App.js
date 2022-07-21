import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SpinLoading } from "antd-mobile";
import WebAppHeader from "./components/WebApp_Header";
import WebAppFooter from "./components/WebApp_Footer";
import RouteLists from "./config/webAppRouter";

import "./App.css";
const DianPingHome = lazy(() => import("./pages/DianPing_Home"));

function App() {
  const { pathname } = useLocation();
  return (
    <div className="demo-App">
      {pathname !== "/user" && <WebAppHeader />}
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
          {RouteLists.map((e, i) => (
            <Route key={i} element={<e.element />} path={e.path}></Route>
          ))}
        </Routes>
      </Suspense>
      <WebAppFooter />
    </div>
  );
}

export default App;
