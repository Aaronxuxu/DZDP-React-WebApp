import React, { useRef } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Input, Radio, Button } from "antd-mobile";
import LoginPhone from "./Login_Phone";
import { setLogin } from "../../redux/actions/logintState";
import "./index.css";
function DianPinglogin(props) {
  const { loginState, setLogin } = props;
  const codeRef = useRef();

  // 登录
  const handleLogin = (val) => {
    const { getPhone } = codeRef.current;
    const { phoneVal } = getPhone();
    return setLogin({ ...val, phoneVal });
  };

  return loginState && loginState.id ? (
    <Navigate to="/user" />
  ) : (
    <div className="init-body webApp-Login">
      <div className="login-header">手机号快捷登录</div>
      <Form
        onFinish={handleLogin}
        className="login-form"
        style={{
          "--border-bottom": "none",
          "--border-top": "none",
        }}
        layout="horizontal"
        footer={
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
        }
      >
        <Form.Item
          name="phone"
          style={{ "--padding-left": "0", "--prefix-width": "auto" }}
          extra={
            <Button
              style={{ "--background-color": "rgba(96,96,96,.2)" }}
              size="mini"
              shape="rounded"
            >
              发送验证码
            </Button>
          }
          label={<LoginPhone ref={codeRef} />}
          rules={[{ required: true, message: "手机号码不能为空" }]}
        >
          <Input placeholder="请输入手机号码" />
        </Form.Item>
        <Form.Item
          style={{ "--padding-left": "0", "--prefix-width": "auto" }}
          label="验证码"
          name="checkCode"
          rules={[{ required: true }]}
        >
          <Input placeholder="请输入验证码"></Input>
        </Form.Item>
        <Form.Item
          style={{ "--padding-left": "0" }}
          name="isSure"
          rules={[{ required: true, message: "请阅读条项并同意" }]}
        >
          <Radio
            style={{
              "--icon-size": "18px",
              "--font-size": "0.6rem",
              color: "rgba(96,96,96,.7)",
            }}
          >
            我已阅读并同意
            <a href="https://www.baidu.com">《美团用户服务协议》</a>、
            <a href="https://www.baidu.com">《隐私政策》</a>
            等，接受免除或者限制责任、诉讼管辖约定等粗体标示条款
          </Radio>
        </Form.Item>
      </Form>
    </div>
  );
}
export default connect((state) => ({ loginState: state.loginState }), {
  setLogin,
})(DianPinglogin);
