import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TweetDetailCommmends from "./Tweet_Detail_Commends";
import {
  Swiper,
  Space,
  Image,
  Button,
  Avatar,
  Ellipsis,
  AutoCenter,
  Skeleton,
  SpinLoading,
} from "antd-mobile";

import { HeartOutline } from "antd-mobile-icons";
import "./index.css";

function DianPingTweetDetail() {
  const { state } = useLocation();

  const [tweetItem, setTweetItem] = useState({});

  useEffect(() => {
    setTweetItem(state);
  }, [state]);

  return Object.keys(tweetItem).length > 0 ? (
    <>
      {/* 轮播图 */}
      <Swiper
        indicator={(total, current) => (
          <div className="swiper-indi">{`${current + 1} / ${total}`}</div>
        )}
      >
        {tweetItem.Images.map((e) => (
          <Swiper.Item key={e.id}>
            <Image
              src={e.url}
              lazy={true}
              placeholder={<Skeleton animated={true}></Skeleton>}
              fallback={""}
            ></Image>
          </Swiper.Item>
        ))}
      </Swiper>
      <div className="tweet-body">
        {/* 文章作者组件 */}
        <Space style={{ width: "100%" }} justify="between" align="center">
          <Space align="center">
            <Avatar
              src={tweetItem.userID.avatar}
              style={{ "--border-radius": "50%", "--size": "2rem" }}
            ></Avatar>
            <div className="userInfo-info">
              <Space direction="vertical">
                <span>{tweetItem.userID.userName}</span>
                <span>{tweetItem.createTime}</span>
              </Space>
            </div>
          </Space>
          <Button fill="outline" shape="rounded" size="mini">
            关注
          </Button>
        </Space>
        {/* 文章主体内容 */}
        <div className="tweet-content">
          <Space direction="vertical">
            <AutoCenter>{tweetItem.title}</AutoCenter>
            <Ellipsis
              rows={10}
              direction="end"
              content={tweetItem.content}
              expandText="查看全部"
            />
          </Space>
        </div>
        {/* 点赞组件 */}
        <Space className="tweet-likes" align="center" justify="start">
          <HeartOutline fontSize={"1rem"}></HeartOutline>
          <Space style={{ "--gap": "-.5rem" }}>
            {tweetItem.Likes.slice(0, 3).map((e) => (
              <Avatar
                key={e.id}
                src={e.avatar}
                style={{ "--size": "1.5rem", "--border-radius": "50%" }}
              ></Avatar>
            ))}
          </Space>
          <span>{tweetItem.Likes.length}人赞</span>
        </Space>
        {/* 推文评论组件 */}
        <TweetDetailCommmends tweetID={tweetItem.id} />
      </div>
    </>
  ) : (
    <SpinLoading
      className="route-spinloading"
      color="primary"
      style={{
        "--size": "32px",
      }}
    />
  );
}
export default DianPingTweetDetail;
