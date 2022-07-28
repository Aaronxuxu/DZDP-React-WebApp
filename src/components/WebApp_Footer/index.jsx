import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TabBar } from "antd-mobile";
import {
  UserSetOutline,
  AddOutline,
  LocationOutline,
  HeartOutline,
  GlobalOutline,
} from "antd-mobile-icons";

import "./index.css";
function WebAppFooter() {
  const items = [
    { key: "/home", title: "首页", icon: <GlobalOutline /> },
    { key: "/city", title: "城市", icon: <LocationOutline /> },
    { key: "/add_tweet", icon: <AddOutline /> },
    { key: "/my", title: "用户相关", icon: <HeartOutline /> },
    { key: "/user", title: "用户中心", icon: <UserSetOutline /> },
  ];
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeKey, setActiveKey] = useState("");
  useEffect(() => {
    setActiveKey(
      pathname === "/"
        ? "/home"
        : items.some((e) => pathname.includes(e.key))
        ? items.find((e) => pathname.includes(e.key)).key
        : null
    );
  }, [pathname]);

  const handleChange = (value) => {
    if (value === "/my") {
      return navigate("/my/col?optType=All");
    }
    return navigate(value);
  };
  return (
    <div className="webApp-Footer">
      <TabBar onChange={handleChange} activeKey={activeKey}>
        {items.map((e) => (
          <TabBar.Item key={e.key} title={e.title} icon={e.icon}></TabBar.Item>
        ))}
      </TabBar>
    </div>
  );
}
export default WebAppFooter;
