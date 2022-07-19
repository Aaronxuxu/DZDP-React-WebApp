import React from "react";
import { List, Avatar, Button, Space } from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";
function LoginList(props) {
  const { userInfo } = props;
  return (
    <List.Item
      prefix={
        <Avatar
          src={userInfo.avatar}
          style={{ "--size": "2.5rem", "--border-radius": "50%" }}
        />
      }
      title={
        <div style={{ fontSize: "1rem", color: "#fff" }}>
          {userInfo.userName}
        </div>
      }
      children={
        <Space style={{ fontSize: "0.6rem" }}>
          <span>粉丝&nbsp;{userInfo.fans}</span>
          <span>关注&nbsp;{userInfo.follows}</span>
        </Space>
      }
      extra={
        <Space
          style={{
            color: "#fff",
            border: "1px solid #fff",
            padding: "0 5px",
            borderRadius: "10px",
          }}
        >
          <span style={{ fontSize: "0.6rem" }}>个人主页</span>
          <RightOutline fontSize="0.6rem" />
        </Space>
      }
    ></List.Item>
  );
}
export default LoginList;
