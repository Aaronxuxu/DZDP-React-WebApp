import React from "react";
import { connect } from "react-redux";
import LoginList from "./LoginList";
import UnLoginList from "./UnLoginList";
import { List, Collapse, Button } from "antd-mobile";

import UserEvaluate from "./User_Collapse/User_Evaluate";
import UserCollect from "./User_Collapse/User_Collect";
import UserLikes from "./User_Collapse/User_Likes";
import { setLogout } from "../../redux/actions/logintState";

import "./index.css";
const collArr = [
  { id: "UserEvaluate", element: <UserEvaluate />, title: "评价" },
  { id: "UserCollect", element: <UserCollect />, title: "收藏" },
  { id: "UserLikes", element: <UserLikes />, title: "点赞" },
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
            >
              {e.element}
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
