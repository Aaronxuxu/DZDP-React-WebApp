import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Space,
  Grid,
  Toast,
  Skeleton,
  Card,
  Image,
  Ellipsis,
  Avatar,
  Button,
  InfiniteScroll,
  DotLoading,
} from "antd-mobile";
import { HeartOutline } from "antd-mobile-icons";
import "./index.css";
import { getHomeTweet } from "../../../api/axios";

function HomeRecommend() {
  // 路由跳转
  const navigate = useNavigate();
  // 获取次数
  const [getCount, setGetCount] = useState(0);
  // 加载中
  const [isLoading, setIsLoading] = useState(true);

  // 获取推荐文章
  const [tweetList, setTweetList] = useState([
    { id: "left", list: [] },
    { id: "right", list: [] },
  ]);
  const [hasMore, setHasMore] = useState(true);

  // axios获取数据
  const getList = async () => {
    const { status, result, msg } = await getHomeTweet({ getCount });
    setGetCount((state) => state + 1);
    if (status !== 0) {
      return Toast.show({
        content: msg,
        position: "top",
      });
    }
    setHasMore(result.length > 0);
    if (result.length > 0) {
      const middleLength = Math.ceil(result.length / 2);
      const leftValue = result.splice(0, middleLength);
      const rightValue = result;
      setTweetList((val) => [
        { ...val[0], list: [...val[0].list, ...leftValue] },
        { ...val[1], list: [...val[0].list, ...rightValue] },
      ]);
    }
    setIsLoading(false);
  };
  // 卡片点击跳转
  const handleClick = (target) => {
    return navigate("/tweet_detail/", { state: target });
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="home-recommend">
      {isLoading ? (
        <div className="recommend-loading">
          <DotLoading></DotLoading>
          <span style={{ fontSize: ".8rem" }}>加载中</span>
        </div>
      ) : (
        <>
          <Grid columns={2} gap={"0.5rem"}>
            {tweetList.map((e) => (
              <Grid.Item key={e.id}>
                <Space direction="vertical" className="recommend-lists">
                  {e.list.map((el) => (
                    <Card key={el.id} onClick={() => handleClick(el)}>
                      <Space direction="vertical" style={{ width: "100%" }}>
                        <Image
                          lazy={true}
                          src={el.Images[0].url}
                          width="100%"
                          fallback={
                            <Image src="/404" width="100%" height={150} />
                          }
                          placeholder={
                            <Skeleton
                              animated
                              style={{ "--height": "150px", "--width": "100%" }}
                            />
                          }
                          style={{ textAlign: "center" }}
                        ></Image>
                        <Ellipsis content={el.title} rows={2}></Ellipsis>
                        <div className="card-footer">
                          <div className="card-footer-user">
                            <Space align="center">
                              <Avatar
                                src={el.userID.avatar}
                                style={{
                                  "--size": "1rem",
                                  "--border-radius": "50%",
                                }}
                              ></Avatar>
                              <Ellipsis content={el.userID.userName}></Ellipsis>
                            </Space>
                          </div>
                          <div className="card-footer-likes">
                            <Button fill="none" size="mini">
                              <Space>
                                <HeartOutline />
                                {el.Likes.length}
                              </Space>
                            </Button>
                          </div>
                        </div>
                      </Space>
                    </Card>
                  ))}
                </Space>
              </Grid.Item>
            ))}
          </Grid>
          <InfiniteScroll
            threshold="100"
            loadMore={getList}
            hasMore={hasMore}
          />
        </>
      )}
    </div>
  );
}
export default HomeRecommend;
