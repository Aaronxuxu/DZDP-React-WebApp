import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLoginUserCom } from "../../../api/axios";
import { SpinLoading, Card, List, Toast, Space, Empty } from "antd-mobile";
import { QuestionCircleOutline } from "antd-mobile-icons";
function UserEvaluate(props) {
  const { userID } = props;
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
    setIsLoading(false);
  };

  useEffect(() => {
    getLists();
  }, []);
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      {isLoading ? (
        <Space
          direction="vertical"
          align="center"
          style={{ width: "100%", color: "black" }}
        >
          <SpinLoading />
          <span>正在加载中</span>
        </Space>
      ) : comLists.length > 0 ? (
        <Space direction="vertical" style={{ width: "100%" }}>
          <Card title="卡片标题">卡片内容</Card>
          <Card title="卡片标题">卡片内容</Card>
        </Space>
      ) : (
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
      )}
    </div>
  );
}
export default connect(
  (state) => ({ userID: state.loginState.id }),
  {}
)(UserEvaluate);
