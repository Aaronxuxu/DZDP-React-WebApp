// 由于评价、点赞组件相似，这里只写了收藏类，待以后完善剩下两项
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LoginList from "./LoginList";
import UnLoginList from "./UnLoginList";
import { List, Collapse, Button } from "antd-mobile";

import UserEvaluate from "./User_Collapse/User_Evaluate";
import UserLikes from "./User_Collapse/User_Likes";
import { setLogout } from "../../redux/actions/logintState";

import "./index.css";

const collArr = [
  {
    id: "UserEvaluate",
    element: UserEvaluate,
    title: "评价",
    path: "/my/eva?optType=All",
  },
  {
    id: "UserLikes",
    element: UserLikes,
    title: "点赞",
    path: "/my/likes?optType=All",
  },
];

function DianPingUser(props) {
  const { loginState, setLogout } = props;
  return (
    <div className="DianPing-User">
      <List
        style={{
          "--border-top": "none",
          "--border-inner": "none",
          "--border-bottom": "none",
          "--adm-color-background": "transparent",
          "--active-background-color": "transparent",
          color: "#fff",
        }}
      >
        {loginState && loginState.id ? (
          <LoginList userInfo={loginState} />
        ) : (
          <UnLoginList />
        )}
      </List>
      <div className="user-base user-Collapse">
        <Collapse accordion={true}>
          {collArr.map((e) => (
            <Collapse.Panel
              key={e.id}
              disabled={!(loginState && loginState.id)}
              title={e.title}
              destroyOnClose={true}
            >
              <div className="user-colList">
                <e.element />
                <Link
                  to={e.path}
                  style={{
                    display: "block",
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  点击查看更多
                </Link>
              </div>
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
      {loginState && loginState.id ? (
        <div className="user-base user-Logout">
          <Button
            style={{ "--border-radius": "20px" }}
            block
            onClick={() => setLogout()}
          >
            退出登录
          </Button>
        </div>
      ) : null}
    </div>
  );
}
export default connect(
  (state) => ({
    loginState: state.loginState,
  }),
  { setLogout }
)(DianPingUser);
