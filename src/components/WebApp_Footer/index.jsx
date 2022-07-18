import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const items = [
    { key: "/home", title: "首页", icon: <GlobalOutline /> },
    { key: "/city", title: "城市", icon: <LocationOutline /> },
    { key: "addTweet", icon: <AddOutline /> },
    { key: "collect", title: "收藏", icon: <HeartOutline /> },
    { key: "/user", title: "我的", icon: <UserSetOutline /> },
  ];
  const handleChange = (value) => {
    return navigate(value);
  };
  return (
    <div className="webApp-Footer">
      <TabBar onChange={handleChange}>
        {items.map((e) => (
          <TabBar.Item key={e.key} title={e.title} icon={e.icon}></TabBar.Item>
        ))}
      </TabBar>
    </div>
  );
}
export default WebAppFooter;
