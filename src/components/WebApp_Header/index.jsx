import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavBar, SearchBar } from "antd-mobile";
import { DownOutline, UserOutline } from "antd-mobile-icons";
import { connect } from "react-redux";
import RouteLists from "../../config/webAppRouter";
import "./index.css";
function WebAppHeader(props) {
  const { targetCity, loginState } = props;
  const [isHome, setIsHome] = useState(false);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/" || pathname === "/home") {
      setIsHome(true);
    } else {
      const url = pathname.split("/").filter((e) => e)[0];
      setTitle(RouteLists.find((e) => e.path.includes(url)).routeName);
      setIsHome(false);
    }
  }, [pathname]);
  // 跳转登录页/用户页
  const handleUser = () =>
    loginState && loginState.id ? navigate("/user") : navigate("/login");

  return (
    <NavBar
      className="webApp-Header"
      backArrow={
        isHome ? (
          <div style={{ fontSize: "0.8rem" }}>
            {targetCity}
            <DownOutline />
          </div>
        ) : (
          true
        )
      }
      onBack={() =>
        isHome ? navigate("/city") : navigate(-1, { replace: true })
      }
      right={
        isHome && (
          <UserOutline onClick={handleUser} style={{ fontSize: "1.2rem" }} />
        )
      }
      style={{
        "--height": "50px",
        backgroundColor: "#fff",
        color: "black",
      }}
    >
      {isHome ? (
        <SearchBar
          placeholder="请输入内容"
          style={{ "--border-radius": "100px" }}
        />
      ) : (
        title
      )}
    </NavBar>
  );
}
export default connect(
  (state) => ({ targetCity: state.targetCity, loginState: state.loginState }),
  {}
)(WebAppHeader);
