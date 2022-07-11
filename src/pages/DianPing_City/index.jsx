import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// UI
import {
  ErrorBlock,
  Button,
  Divider,
  IndexBar,
  Grid,
  AutoCenter,
} from "antd-mobile";
// 组件
import WebAppHeader from "../../components/WebApp_Header";
// jsonp/axios
import apiJsonp from "../../api/jsonp";
import { APIKEY } from "../../config/constant";
// redux
import { connect } from "react-redux";
import { changeCity } from "../../redux/actions/targetCity";

import "./index.css";

function DianPingCity(props) {
  // redux数据方法
  const { changeCity, targetCity } = props;
  // 路由函数
  const navigate = useNavigate();
  // 设置城市数据State(目前只有省份，后续市区考虑是否添加进去)
  const [cityItems, setCityItems] = useState([]);

  // 获取省份数据
  const getCityApi = async () => {
    const data = await apiJsonp(
      `https://api.jisuapi.com/area/province?appkey=${APIKEY}`
    );
    setCityItems(data);
  };
  // 选取省份
  const handleChangeCity = (target) => {
    changeCity(target.name);
    return navigate("/");
  };
  // 初始化
  useEffect(() => {
    getCityApi();
  }, []);

  return (
    <>
      <WebAppHeader title={"城市选择"} />
      <div className="city-current">{targetCity}</div>
      <Divider></Divider>
      {cityItems.length !== 0 ? (
        <IndexBar>
          <IndexBar.Panel title="热门城市" index="#" key="#">
            <Grid columns={3}>
              {cityItems.map((e) => (
                <Grid.Item
                  key={e.id}
                  className="city-item"
                  onClick={() => handleChangeCity(e)}
                >
                  <AutoCenter>{e.name}</AutoCenter>
                </Grid.Item>
              ))}
            </Grid>
          </IndexBar.Panel>
        </IndexBar>
      ) : (
        <ErrorBlock
          fullPage={true}
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          style={{
            "--image-height": "150px",
          }}
          title="暂无相关城市数据"
          description=""
        >
          <Button color="primary" onClick={() => navigate(0)}>
            刷新页面
          </Button>
        </ErrorBlock>
      )}
    </>
  );
}

export default connect((state) => ({ targetCity: state.targetCity }), {
  changeCity,
})(DianPingCity);
