import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getLoginUserCom } from "../../../api/axios";
import {
  SpinLoading,
  Card,
  List,
  Toast,
  Space,
  Empty,
  Button,
  Image,
  Ellipsis,
  Rate,
  Popover,
} from "antd-mobile";
import {
  QuestionCircleOutline,
  RightOutline,
  MoreOutline,
  EyeInvisibleOutline,
} from "antd-mobile-icons";

function UserEvaluate(props) {
  const { id: userID, userName } = props.loginState;
  const [comLists, setComLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getLists = async () => {
    const { result, status, msg } = await getLoginUserCom(userID);
    if (status !== 0) {
      setIsLoading(false);
      return Toast.show({
        content: msg,
        position: "top",
      });
    }
    setComLists(result.splice(0, 5));
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };
  // 写评论
  const handleWrite = (target) => {};

  useEffect(() => {
    getLists();
  }, []);

  return (
    <>
      {isLoading ? (
        <Space
          direction="vertical"
          align="center"
          style={{ width: "100%", color: "black" }}
        >
          <SpinLoading />
          <span>正在加载中</span>
        </Space>
      ) : comLists.length < 1 ? (
        <Empty
          style={{ padding: "64px 0" }}
          image={
            <QuestionCircleOutline
              style={{
                color: "var(--adm-color-light)",
                fontSize: 48,
              }}
            />
          }
          description="暂无数据"
        />
      ) : (
        <Space direction="vertical" style={{ width: "100%", "--gap": "1rem" }}>
          {comLists.map((el) => (
            <Card
              className="card-list-item"
              key={el.id}
              headerStyle={{ borderBottom: "none" }}
              style={{ color: "black" }}
              title={
                <div style={{ fontSize: ".7rem" }}>
                  <span>{el.goodsInfo.storeName}</span>
                  <RightOutline fontSize="0.5rem" />
                </div>
              }
            >
              <div className="com-body">
                <List
                  style={{
                    "--border-bottom": "none",
                    "--border-top": "none",
                    "--border-inner": "none",
                    "--prefix-width": "3.3rem",
                    "--align-items": "start",
                  }}
                >
                  <List.Item
                    prefix={
                      <Image src={el.goodsInfo.goodsImage} height="3.3rem" />
                    }
                    extra={
                      <Space
                        direction="vertical"
                        align="center"
                        style={{ fontSize: "0.6rem" }}
                      >
                        {/* <Popover.Menu
                          actions={[
                            {
                              key: "delCom",
                              icon: <EyeInvisibleOutline />,
                              text: "隐藏该评价",
                            },
                          ]}
                          placement="topRight"
                          onAction={(node) => Toast.show(`选择了 ${node.text}`)}
                          trigger="click"
                        > */}
                        <MoreOutline fontSize="1.2rem" />
                        {/* </Popover.Menu> */}
                        {el.comAndRete.length < 1 ? null : el.realName ? (
                          <span>{userName}</span>
                        ) : (
                          <span>已匿名</span>
                        )}
                      </Space>
                    }
                    title={
                      <Ellipsis
                        style={{ fontSize: "0.7rem" }}
                        content={el.goodsInfo.goodsName}
                      />
                    }
                    children={
                      el.comAndRete.length > 0 ? (
                        <Space align="center" style={{ fontSize: ".6rem" }}>
                          <span>评分</span>
                          <Rate
                            style={{ "--star-size": "0.6rem" }}
                            value={el.comAndRete[0].rate}
                          />
                        </Space>
                      ) : null
                    }
                  />
                </List>
                <div className="com-body-content" style={{ padding: "0 12px" }}>
                  <div
                    className="first-col"
                    style={{ marginTop: "1rem", fontSize: "0.5rem" }}
                  >
                    {el.comAndRete.length === 0 ? (
                      "您还没有填写评价内容"
                    ) : (
                      <Ellipsis rows={2} content={el.comAndRete[0].comText} />
                    )}
                  </div>
                  {el.comAndRete.length === 2 && (
                    <div
                      className="second-col"
                      style={{
                        marginTop: "0.5rem",
                        fontSize: "0.65rem",
                        color: "#999999",
                      }}
                    >
                      已追评
                    </div>
                  )}
                </div>
              </div>
              <div
                className="com-footer"
                style={{
                  margin: "12px 0",
                  padding: "0 12px",
                  display: "flex",
                  justifyContent: el.comAndRete.length === 2 ? "start" : "end",
                }}
              >
                {el.comAndRete.length === 2 ? (
                  <span style={{ fontSize: "0.4rem", color: "#999" }}>
                    感谢您的用心评价！
                  </span>
                ) : (
                  <Button
                    shape="rounded"
                    size="mini"
                    onClick={() => handleWrite()}
                  >
                    {el.comAndRete.length === 1 ? "追加" : "评论"}
                  </Button>
                )}
              </div>
            </Card>
          ))}

        </Space>
      )}
    </>
  );
}
export default connect(
  (state) => ({ loginState: state.loginState }),
  {}
)(UserEvaluate);
