import React, { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import TweetLocation from "./Tweet_Location";
import TweetTownTalk from "./Tweet_TownTalk";

import { TextArea, Button, Form, Space, Toast } from "antd-mobile";
import { FillinOutline } from "antd-mobile-icons";
import { addTweet } from "../../api/axios";
import "./index.css";

function DianPingAddTweet(props) {
  const navigate = useNavigate();
  const { loginState } = props;
  const tLocal = useRef();
  const tTownTalk = useRef();

  const handleFinish = async (values) => {
    const { id } = loginState;
    const { getGoods } = tLocal.current;
    // const { getTalk } = tTownTalk.current;
    // values.tTownTalk = getTalk();

    values.tLocal = getGoods();
    const { result, status, msg } = await addTweet({ ...values, id });
    if (status !== 0) {
      return Toast.show({
        content: msg,
        position: "top",
      });
    }
    Toast.show({
      content: "添加推文成功，两秒后返回首页",
      position: "top",
    });
    return setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return loginState && loginState.id ? (
    <div className="init-body webApp-addTweet">
      <Form
        style={{
          "--border-bottom": "none",
          "--border-top": "none",
          "--border-inner": "none",
        }}
        footer={
          <>
            <Button fill="none" size="mini" className="addTweet-saveBtn">
              <Space direction="vertical" style={{ "--gap": "3px" }}>
                <FillinOutline />
                <span>存草稿</span>
              </Space>
            </Button>
            <Button
              type="submit"
              block
              shape="rounded"
              className="addTweet-submitBtn"
              style={{
                "--text-color": "#fff",
                "--background-color": "#1677ff",
              }}
            >
              提交
            </Button>
          </>
        }
        onFinish={handleFinish}
      >
        <div className="addTweet-TextArea">
          <Form.Item
            name="tweetTitle"
            rules={[{ required: true, message: "请填入必填项" }]}
          >
            <TextArea
              className="tweetTitle"
              placeholder="填上标题更容易上首页哦~"
              rows={1}
              maxLength={30}
              showCount={true}
              style={{ "--font-size": "0.8rem" }}
            />
          </Form.Item>
          <Form.Item
            name="tweetMain"
            className="tweetMain"
            rules={[{ required: true, message: "请填入必填项" }]}
          >
            <TextArea
              rows={12}
              placeholder="添加商户/地点的笔记更容易被推荐上首页哦~"
              style={{ "--font-size": "0.8rem" }}
            />
          </Form.Item>
        </div>

        <Form.Item name="tLocal" className="addTweet-Picker">
          <TweetLocation ref={tLocal} />
        </Form.Item>

        <Form.Item name="tTownTalk" className="addTweet-Picker">
          <TweetTownTalk ref={tTownTalk} />
        </Form.Item>
      </Form>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

export default connect(
  (state) => ({ loginState: state.loginState }),
  {}
)(DianPingAddTweet);
