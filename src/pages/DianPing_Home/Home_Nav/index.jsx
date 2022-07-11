import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCatetory } from "../../../api/axios";
import { Swiper, Empty, Grid } from "antd-mobile";
import { QuestionCircleOutline } from "antd-mobile-icons";
import { connect } from "react-redux";
import "./index.css";

function HomeNav(props) {
  const [cateNav, setCateNav] = useState([]);
  const [curNav, setCurNav] = useState(2);

  const getNav = async () => {
    let { result, status } = await getCatetory();
    if (status === 0) {
      result = result.sort((a, b) => b.clickCount - a.clickCount);
      let arr = [result.splice(0, 10), result];
      setCateNav(arr);
    }
  };
  useEffect(() => {
    getNav();
  }, []);

  const handleSwiper = (i) => {
    return setCurNav(Math.ceil(cateNav[i].length / 5));
  };

  return (
    <div className="home-nav">
      {cateNav.length > 0 ? (
        <Swiper
          style={{
            "--track-padding": " 0 0 16px",
            "--custom-heigth": curNav * 3.5 + 0.6 + "rem",
          }}
          onIndexChange={handleSwiper}
        >
          {cateNav.map((e, i) => (
            <Swiper.Item key={i}>
              <Grid columns={5} style={{ padding: "0.3rem 0.3rem" }}>
                {e.map((el) => (
                  <Link
                    to={`/${props.targetCity}`}
                    key={el.id}
                    className="nav-list"
                  >
                    <i
                      className={"iconfont " + el.icon}
                      style={{ fontSize: "1.6rem" }}
                    ></i>
                    <div className="nav-list-content">{el.cName}</div>
                  </Link>
                ))}
              </Grid>
            </Swiper.Item>
          ))}
        </Swiper>
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
        ></Empty>
      )}
    </div>
  );
}
export default connect(
  (state) => ({ targetCity: state.targetCity }),
  {}
)(HomeNav);
