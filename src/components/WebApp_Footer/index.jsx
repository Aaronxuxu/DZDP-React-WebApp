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
    { key: "/user_collect", title: "收藏", icon: <HeartOutline /> },
    { key: "/user", title: "我的", icon: <UserSetOutline /> },
  ];
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeKey, setActiveKey] = useState("");
  useEffect(() => {
    setActiveKey(
      pathname === "/"
        ? "/home"
        : items.some((e) => pathname.includes(e.key))
        ? pathname
        : null
    );
  }, [pathname]);

  const handleChange = (value) => {
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
