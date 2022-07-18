import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { SpinLoading } from "antd-mobile";
import WebAppHeader from "./components/WebApp_Header";
import WebAppFooter from "./components/WebApp_Footer";
import RouteLists from "./config/webAppRouter";

import "./App.css";
const DianPingHome = lazy(() => import("./pages/DianPing_Home"));

function App() {
  return (
    <div className="demo-App">
      <WebAppHeader />
      <div className="demo-Body">
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
      </div>
      <WebAppFooter />
    </div>
  );
}

export default App;
