import React, { useEffect, useState } from "react";
import { getTweetCommends } from "../../../api/axios";
import {
  List,
  Avatar,
  SearchBar,
  Space,
  Button,
  Toast,
  InfiniteScroll,
} from "antd-mobile";
import { HeartOutline } from "antd-mobile-icons";
import "./index.css";

function TweetDetailCommmends(props) {
  const { tweetID } = props;
  const [itemLists, setItemLists] = useState([]);

  const [getCount, setGetCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const getCommends = async () => {
    const { result, msg, status } = await getTweetCommends({
      tweetID,
      getCount,
    });
    if (status !== 0) {
      setHasMore(false);
      return Toast.show({
        content: msg,
        position: "top",
      });
    }
    // 上线删除
    setGetCount((val) => val + 1);
    if (result && result.length > 0) {
      setItemLists((val) => [...val, ...result]);
    }
    setHasMore(result.length > 0);
  };

  return (
    <List
      className="tweet-commends"
      style={{
        "--border-bottom": "none",
        "--border-top": "none",
        "--border-inner": "none",
        "--font-size": "0.65rem",
      }}
    >
      <List.Item
        className="tweet-commends-addCom"
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

      {itemLists.map((e) => (
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
      <InfiniteScroll loadMore={getCommends} hasMore={hasMore} threshold="50" />
    </List>
  );
}
export default TweetDetailCommmends;
