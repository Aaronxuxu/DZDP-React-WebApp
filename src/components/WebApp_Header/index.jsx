import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavBar, SearchBar } from "antd-mobile";
import { DownOutline, UserOutline } from "antd-mobile-icons";
import { connect } from "react-redux";
function WebAppHeader(props) {
  const [isHome, setIsHome] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/" || pathname === "/home") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [pathname]);

  return (
    <NavBar
      backArrow={
        isHome ? (
          <div style={{ fontSize: "20px" }}>
            {props.targetCity}
            <DownOutline />
          </div>
        ) : (
          true
        )
      }
      onBack={() =>
        isHome ? navigate("/city") : navigate(-1, { replace: true })
      }
      right={isHome && <UserOutline style={{ fontSize: "24px" }} />}
      style={{
        "--height": "50px",
        backgroundColor: "#ff6633",
        color: "#fff",
      }}
    >
      {isHome ? (
        <SearchBar
          placeholder="请输入内容"
          style={{ "--background": "#ffffff", "--border-radius": "100px" }}
        />
      ) : (
        props.title
      )}
    </NavBar>
  );
}
export default connect(
  (state) => ({ targetCity: state.targetCity }),
  {}
)(WebAppHeader);
