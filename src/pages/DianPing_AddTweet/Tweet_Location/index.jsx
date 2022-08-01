import React, {
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState,
} from "react";
import { getCatetoryList } from "../../../api/axios";
import { Picker, Card, Space, List, Avatar } from "antd-mobile";
import {
  RightOutline,
  EnvironmentOutline,
  CloseOutline,
} from "antd-mobile-icons";

function TweetLocation(props, ref) {
  const [columns, setColumns] = useState([]);
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [valArr, setValArr] = useState(null);

  const getGoods = async () => {
    const { result, status, msg } = await getCatetoryList();
    if (status !== 0) {
      return;
    }
    setColumns(result);
  };

  useEffect(() => {
    getGoods();
  }, []);

  useEffect(() => {
    if (value !== "") {
      setValArr(columns.find((e) => e.id === value));
    }
  }, [value]);

  useImperativeHandle(ref, () => ({
    getGoods: () => value,
  }));

  return (
    <>
      <Card
        title={
          <Space
            align="center"
            style={{ "--gap-horizontal": "3px", fontSize: "0.7rem" }}
          >
            <EnvironmentOutline fontSize={"1rem"} />
            <span>添加店/地点</span>
          </Space>
        }
        extra={
          <Space
            style={{
              "--gap-horizontal": "3px",
              fontSize: "0.5rem",
              color: "rgb(166, 166, 166)",
            }}
          >
            <span>{value === "" ? "分享去处可获得更多曝光" : "更换"}</span>
            <RightOutline></RightOutline>
          </Space>
        }
        onHeaderClick={() => setVisible(true)}
      >
        {value !== "" && valArr !== null && (
          <List style={{ "--border-top": "none" }}>
            <List.Item
              prefix={
                <Avatar
                  src={valArr.storeAvatar}
                  style={{ "--size": "1.8rem" }}
                />
              }
              title={
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    color: "black",
                  }}
                >
                  {valArr.storeName}
                </span>
              }
              description={
                <Space
                  align="center"
                  style={{
                    color: "black",
                    overflow: "hidden",
                    fontSize: "0.5rem",
                  }}
                >
                  <span>{valArr.location}</span>
                  <span>{valArr.cateID.cateName}</span>
                </Space>
              }
              arrow={<CloseOutline onClick={() => setValue("")} />}
            />
          </List>
        )}
      </Card>
      <Picker
        columns={[columns.map((e) => ({ label: e.storeName, value: e.id }))]}
        visible={visible}
        value={value}
        onClose={() => setVisible(false)}
        onConfirm={(val) => setValue(val[0])}
      ></Picker>
    </>
  );
}
export default forwardRef(TweetLocation);
