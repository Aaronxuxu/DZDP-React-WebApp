import React from "react";
import { List, Avatar, SearchBar, Space, Button } from "antd-mobile";
import { HeartOutline } from "antd-mobile-icons";
import "./index.css";
function TweetDetailCommmends(props) {
  const { comments } = props;
  return (
    <List
      className="tweet-commends"
      style={{
        "--border-bottom": "none",
        "--border-top": "none",
        "--font-size": "0.65rem",
      }}
    >
      <List.Item
        prefix={
          <Avatar style={{ "--border-radius": "50%", "--size": "1.8rem" }} />
        }
      >
        <SearchBar
          icon={null}
          placeholder="说点什么..."
          style={{ "--border-radius": "100px" }}
        ></SearchBar>
      </List.Item>

      {comments.map((e) => (
        <List.Item
          key={e.id}
          prefix={
            <Avatar
              style={{ "--size": "1.5rem", "--border-radius": "50%" }}
              src={e.avatar}
            />
          }
          title={
            <Space justify="between" style={{ width: "100%" }}>
              <div className="commends-user">
                <Space direction="vertical" style={{ "--gap": "5" }}>
                  {e.userName}
                  {e.createTime}
                </Space>
              </div>
              <div className="commends-edit">
                <Space>
                  <Button fill="none">
                    <Space align="center">
                      <HeartOutline fontSize={"0.65rem"} />
                      <span style={{ fontSize: "0.65rem" }}>{e.beLikes}</span>
                    </Space>
                  </Button>
                </Space>
              </div>
            </Space>
          }
        >
          {e.content}
        </List.Item>
      ))}
    </List>
  );
}
export default TweetDetailCommmends;
