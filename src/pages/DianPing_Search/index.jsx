import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCatetoryList } from "../../api/axios";
import {
  List,
  Skeleton,
  Toast,
  Image,
  Space,
  Rate,
  Tag,
  InfiniteScroll,
} from "antd-mobile";
import { ReceiptOutline, SmileOutline, FrownOutline } from "antd-mobile-icons";
import "./index.css";
function DianPingSearch() {
  const { state } = useLocation();
  // 列表数据
  const [listItems, setListItems] = useState([]);
  // 骨架屏
  const [isLoading, setIsLoading] = useState({
    bol: true,
    loadingArr: [0, 1, 2, 3, 4],
  });
  const [getCount, setGetCount] = useState(0);

  // 无限加载
  const [hasMore, setHasMore] = useState(true);

  // axios请求
  const getLists = async () => {
    const { status, msg, result } = await getCatetoryList({
      ...state,
      getCount,
    });
    if (status !== 0) {
      setHasMore(false);
      return Toast.show({
        content: msg,
        position: "top",
      });
    }
    setGetCount((val) => val + 1);
    setHasMore(result.length > 0);
    if (result.length > 0) {
      setListItems([...listItems, ...result]);
    }
    setIsLoading({ bol: false });
  };
  useEffect(() => {
    getLists();
  }, []);

  return (
    <>
      <List
        style={{
          "--header-font-size": "0.8rem",
          "--border-bottom": "none",
          "--border-top": "none",
          "--border-inner": "none",
          "--prefix-width": "3.3rem",
        }}
        className="init-body DianPing-Search"
      >
        {isLoading.bol ? (
          isLoading.loadingArr.map((e, i) => (
            <List.Item
              key={i}
              prefix={
                <Skeleton.Title
                  animated
                  style={{ "--width": "100%", "--height": "3.3rem" }}
                />
              }
              title={
                <Skeleton.Title
                  style={{ "--width": "100%", "--height": "1rem" }}
                  animated
                />
              }
              children={
                <Skeleton.Title
                  style={{ "--width": "100%", "--height": "1.5rem" }}
                  animated
                />
              }
              description={
                <Skeleton.Title
                  style={{ "--width": "100%", "--height": "2rem" }}
                  animated
                />
              }
            />
          ))
        ) : (
          <>
            {listItems.map((e) => (
              <List.Item
                key={e.id}
                prefix={
                  <Image
                    placeholder={
                      <Skeleton animated style={{ "--height": "3.3rem" }} />
                    }
                    fallback={<FrownOutline fontSize="3.3rem" />}
                    src={e.storeAvatar}
                    lazy={true}
                  />
                }
                title={
                  <Space
                    direction="vertical"
                    style={{
                      "--gap": "1px",
                      fontSize: "0.6rem",
                      color: "black",
                    }}
                  >
                    <span style={{ fontSize: "0.8rem" }}>{e.storeName}</span>
                    <Space align="center">
                      <Rate
                        readOnly
                        value={
                          e.scores.reduce((a, c) => a + c.score, 0) /
                          e.scores.length
                        }
                        style={{ "--star-size": "0.6rem" }}
                      />
                      <span>
                        {Number.parseFloat(
                          e.scores.reduce((a, c) => a + c.score, 0) /
                            e.scores.length
                        ).toFixed(2)}
                      </span>
                      <span>{e.commends}条</span>
                      <span>&yen;{e.meanPrice}/人</span>
                    </Space>
                    <Space align="center">
                      <span>{e.location}</span>
                      <span>{e.cateID.cateName}</span>
                    </Space>
                  </Space>
                }
                description={
                  <Space
                    direction="vertical"
                    style={{
                      marginTop: "0.3rem",
                      fontSize: "0.6rem",
                      color: "black",
                    }}
                  >
                    {e.coupon.length > 0 && (
                      <Space align="center">
                        <ReceiptOutline />
                        <div className="goods-tips">{e.coupon[0].couName}</div>
                      </Space>
                    )}
                    {e.products.length > 0 && (
                      <Space align="center">
                        <SmileOutline />
                        <div className="goods-tips">
                          {e.products[0].proName}
                        </div>
                      </Space>
                    )}
                  </Space>
                }
              >
                <Space wrap={true} style={{ marginTop: "0.3rem" }}>
                  {e.storeTarget.map((el) => (
                    <Tag
                      key={el.id}
                      color={el.color}
                      style={{
                        "--text-color": "black",
                        border: "none",
                        padding: "5px",
                      }}
                    >
                      {el.title}
                    </Tag>
                  ))}
                </Space>
              </List.Item>
            ))}
            <InfiniteScroll
              hasMore={hasMore}
              loadMore={getLists}
              threshold="100"
            ></InfiniteScroll>
          </>
        )}
      </List>
    </>
  );
}
export default DianPingSearch;
