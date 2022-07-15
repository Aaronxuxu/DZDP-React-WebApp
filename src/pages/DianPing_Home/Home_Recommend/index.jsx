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
} from "antd-mobile";
import { HeartOutline } from "antd-mobile-icons";
import "./index.css";
import { getHomeTweet } from "../../../api/axios";

function HomeRecommend() {
  // 路由跳转
  const navigate = useNavigate();
  // 加载中
  const [isLoading, setIsLoading] = useState(true);

  // 获取推荐文章
  const [tweetList, setTweetList] = useState([
    { id: "0", list: [{ id: "00" }, { id: "01" }, { id: "02" }, { id: "03" }] },
    { id: "1", list: [{ id: "11" }, { id: "12" }, { id: "13" }, { id: "14" }] },
  ]);
  // axios获取数据
  const getList = async () => {
    const {
      status,
      result: { list },
      msg,
    } = await getHomeTweet();
    if (status !== 0) {
      return Toast.show({
        content: msg,
        position: "top",
      });
    }
    const middleLength = Math.ceil(list.length / 2);
    setTweetList([
      { id: "0", list: list.splice(0, middleLength) },
      { id: "1", list },
    ]);
    setIsLoading(false);
  };
  // 卡片点击跳转
  const handleClick = (target) => {
    return navigate("tweet_detail/", { state: target });
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="home-recommend">
      <Grid columns={2} gap={"0.5rem"}>
        {tweetList.map((e) => (
          <Grid.Item key={e.id}>
            <Space direction="vertical" className="recommend-lists">
              {e.list.map((el) =>
                isLoading ? (
                  <Skeleton
                    animated={true}
                    style={{
                      "--height": "10rem",
                      "--border-radius": "8px",
                      backgroundColor: "#fff",
                    }}
                    key={el.id}
                  ></Skeleton>
                ) : (
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
                )
              )}
            </Space>
          </Grid.Item>
        ))}
      </Grid>
    </div>
  );
}
export default HomeRecommend;
