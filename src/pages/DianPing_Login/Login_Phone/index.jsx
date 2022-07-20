import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Picker } from "antd-mobile";
import { DownOutline } from "antd-mobile-icons";
import codeLists from "../../../config/areaCode";

function LoginPhone(props, ref) {
  const [visible, setVisible] = useState(false);
  const [phoneVal, setPhoneVal] = useState("+86");
  const handleClick = () => {
    return setVisible(true);
  };
  useImperativeHandle(ref, () => ({
    getPhone: () => ({
      phoneVal,
    }),
  }));
  return (
    <>
      <div onClick={handleClick}>
        <span>{phoneVal}</span>
        <DownOutline />
      </div>
      <Picker
        columns={codeLists}
        visible={visible}
        onClose={() => setVisible(false)}
        value={phoneVal}
        onConfirm={(v) => setPhoneVal(v[0])}
      />
    </>
  );
}
export default forwardRef(LoginPhone);
