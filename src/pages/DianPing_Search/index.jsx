import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCatetoryList } from "../../api/axios";
import WebAppHeader from "../../components/WebApp_Header";
import { List, Skeleton, Toast, Image, Space, Rate } from "antd-mobile";

function DianPingSearch() {
  const { state } = useLocation();
  // 列表数据
  const [listItems, setListItems] = useState([]);
  // 骨架屏
  const [isLoading, setIsLoading] = useState(true);
  // axios请求
  const getLists = async () => {
    const { status, msg, result } = await getCatetoryList(state);
    if (status !== 0) {
      return Toast.show({
        content: msg,
        position: "top",
      });
    }
    console.log(result);
    setIsLoading(false);
    setListItems(result);
  };

  useEffect(() => {
    getLists();
  }, []);
  return (
    <>
      <WebAppHeader title={state.cateName} />
      <List style={{ "--header-font-size": "0.8rem" }}>
        {isLoading
          ? new Array(5)
              .fill("")
              .map((e, i) => (
                <List.Item
                  key={i}
                  prefix={
                    <Skeleton.Title
                      animated
                      style={{ "--width": "3.6rem", "--height": "3.6rem" }}
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
          : listItems.map((e) => (
              <List.Item
                key={e.id}
                prefix={<Image lazy={true} width="3.3rem" height="3.3rem" />}
                title={
                  <Space direction="vertical" style={{ "--gap": "3" }}>
                    <span style={{ fontSize: "0.8rem", color: "black" }}>
                      {e.storeName}
                    </span>
                    <Space
                      style={{ fontSize: "0.4rem", color: "black" }}
                      align="center"
                    >
                      <Rate
                        readOnly
                        value={
                          e.scores.reduce((a, c) => a + c.score, 0) /
                          e.scores.length
                        }
                        style={{ "--star-size": "0.5rem" }}
                      />
                      <span>{e.commends}条</span>
                      <span>&yen;{e.meanPrice}/人</span>
                    </Space>
                    <Space align="center" style={{ fontSize: ".4rem" }}>
                      <span>{e.location}</span>
                      <span>{e.cateID.cateName}</span>
                    </Space>
                  </Space>
                }
              ></List.Item>
            ))}
      </List>
    </>
  );
}
export default DianPingSearch;
