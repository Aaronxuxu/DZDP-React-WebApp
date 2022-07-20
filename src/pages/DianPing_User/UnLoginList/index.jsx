import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, List } from "antd-mobile";

function UnLoginList() {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/login");
  };
  return (
    <List.Item
      prefix={
        <Avatar style={{ "--size": "2.5rem", "--border-radius": "50%" }} />
      }
      children={
        <>
          <div style={{ fontSize: "0.8rem" }}>点击登录</div>
          <div style={{ fontSize: "0.4rem" }}>登录更精彩</div>
        </>
      }
      onClick={handleClick}
    />
  );
}
export default UnLoginList;
