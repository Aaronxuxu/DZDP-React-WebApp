// 由于收藏、评价、点赞组件相似，这里只写了收藏类，待以后完善剩下两项
import React, { useState, useEffect, useRef } from "react";
import {
  Outlet,
  useLocation,
  NavLink,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { connect } from "react-redux";
import { NavBar, Space, Dropdown, Radio, Toast } from "antd-mobile";
import qs from "query-string";
import "./index.css";
const navArr = [
  { key: "/my/col", title: "收藏" },
  { key: "/my/eva", title: "评价" },
  { key: "/my/likes", title: "点赞" },
];
const tabArr = [
  { key: "All", title: "全部" },
  { key: "Goods", title: "商户" },
  { key: "Tweets", title: "推文" },
];

function DianPingMy(props) {
  const { loginState } = props;
  const dropRef = useRef();
  const location = useLocation();
  const { pathname, search } = location;
  const navigate = useNavigate();

  const [value, setValue] = useState("All");

  const handleChangeType = (val) => {
    const { close } = dropRef.current;
    navigate(`${pathname}?optType=${val}`);
    return close();
  };

  useEffect(() => {
    const { optType } = qs.parse(search);
    setValue(optType);
  }, [location]);

  return loginState && loginState.id ? (
    <>
      <NavBar
        style={{ backgroundColor: "#fff" }}
        children={
          <Space
            style={{ width: "100%", "--gap": "0" }}
            justify="between"
            align="center"
          >
            {navArr.map((e) => (
              <NavLink
                key={e.key}
                to={`${e.key}?optType=${value}`}
                className={({ isActive }) =>
                  "navLink" + (isActive ? " navLink-Active" : "")
                }
              >
                {e.title}
              </NavLink>
            ))}
          </Space>
        }
        onBack={() => navigate("/")}
      />
      <div className="webApp-my init-body">
        <Dropdown closeOnClickAway={true} ref={dropRef}>
          <Dropdown.Item
            key="sorter"
            title={tabArr.find((e) => e.key === value).title}
          >
            <div style={{ padding: 12 }}>
              <Radio.Group value={value} onChange={handleChangeType}>
                <Space direction="vertical" block>
                  {tabArr.map((e) => (
                    <Radio
                      block
                      value={e.key}
                      key={e.key}
                      style={{
                        "--icon-size": "18px",
                        "--font-size": "14px",
                        "--gap": "6px",
                      }}
                    >
                      {e.title}
                    </Radio>
                  ))}
                </Space>
              </Radio.Group>
            </div>
          </Dropdown.Item>
        </Dropdown>
        <div className="my-outlet">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/login"></Navigate>
  );
}
export default connect(
  (state) => ({ loginState: state.loginState }),
  {}
)(DianPingMy);
