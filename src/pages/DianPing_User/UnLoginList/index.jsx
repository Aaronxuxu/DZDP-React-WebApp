import React from "react";
import { Avatar, List } from "antd-mobile";
function UnLoginList() {
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
    />
  );
}
export default UnLoginList;
