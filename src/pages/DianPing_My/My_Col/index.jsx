import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import qs from "query-string";
import { getLoginUserCol } from "../../../api/axios";
import {
  Space,
  List,
  Image,
  Rate,
  Avatar,
  InfiniteScroll,
  Ellipsis,
  Toast,
  SpinLoading,
  Skeleton,
} from "antd-mobile";

import { LocationOutline } from "antd-mobile-icons";
// 上线后删除
let getCount = 1;

function MyCol(props) {
  const { id } = props.loginState;
  const { search } = useLocation();
  const [colItems, setColItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const getColItems = async (bol) => {
    if (bol) {
      setIsLoading(true);
    }
    const { optType } = qs.parse(search);
    const { result, msg, status } = await getLoginUserCol({
      id,
      optType,
      getCount,
    });
    if (status !== 0) {
      setIsLoading(false);
      return Toast.show({ content: msg, position: "top" });
    }
    // 上线后删除
    getCount++;

    bol ? setColItems(result) : setColItems([...colItems, ...result]);
    setHasMore(result.length > 0);

    setIsLoading(false);
  };

  useEffect(() => {
    getCount = 1;
    getColItems(true);
  }, [search]);

  return isLoading ? (
    <Space direction="vertical" className="my-loading" align="center">
      <SpinLoading style={{ "--size": "2rem" }} />
      <span>玩命加载中</span>
    </Space>
  ) : (
    <>
      {colItems.map((e) => (
        <div className="my-item-list" key={e.id}>
          <div className="item-list-image">
            <Image
              src={e.image}
              style={{ "--width": "100%", "--height": "100%" }}
              lazy={true}
              placeholder={
                <Skeleton style={{ "--width": "100%", "--height": "100%" }} />
              }
            ></Image>
          </div>
          <div className="item-list-main">
            <Space direction="vertical" style={{ width: "100%" }}>
              {e.classify === "Tweets" && (
                <Space align="center" style={{ "--gap": "5px" }}>
                  <Avatar
                    src={e.author.avatar}
                    style={{ "--size": "1rem", "--border-radius": "0.5rem" }}
                  />
                  <span style={{ fontSize: ".7rem", color: "#999" }}>
                    {e.author.userName}
                  </span>
                </Space>
              )}
              <div className="item-list-main-title">{e.dataName}</div>
              {e.classify === "Goods" && (
                <Space align="center" style={{ fontSize: "0.7rem" }}>
                  <Rate
                    value={e.Rate}
                    readOnly={true}
                    style={{ "--star-size": "0.6rem" }}
                  />
                  <span>{e.Rate}分</span>
                  <span>{e.Commends}条</span>
                  <span>&yen;{e.Price}/人</span>
                </Space>
              )}
              <div className="item-list-main-local">
                <div className="local-content">
                  <div className="content-icon">
                    {e.classify === "Tweets" ? (
                      <LocationOutline />
                    ) : (
                      <>{e.cateName}</>
                    )}
                  </div>
                  <div className="content-posit">{e.location.position}</div>
                </div>
                <div className="local-gap">
                  {e.location.gap > 1000
                    ? `${(e.location.gap / 1000).toFixed(1)}KM`
                    : `${e.location.gap}M`}
                </div>
              </div>
            </Space>
          </div>
          <div className="item-list-icon">
            {e.classify === "Tweets" ? "内容" : "商户"}
          </div>
        </div>
      ))}
      <InfiniteScroll loadMore={getColItems} hasMore={hasMore} />
    </>
  );
}
export default connect(
  (state) => ({ loginState: state.loginState }),
  {}
)(MyCol);
