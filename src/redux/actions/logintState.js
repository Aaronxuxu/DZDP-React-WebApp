import { LOGIN, LOGOUT } from "../../config/constant";
import { setCookie, removeCookie } from "../../config/cookies";
import { login } from "../../api/axios";
import { Toast } from "antd-mobile";
// 登录
export const setLogin = (data) => {
  return async (dispatch) => {
    const { status, result, msg } = await login(data);
    if (status !== 0) {
      return Toast.show({ content: msg, position: "top" });
    }
    setCookie("userInfo", result);
    Toast.show({
      content: "登录成功",
      position: "top",
    });
    return dispatch({ type: LOGIN, data: result });
  };
};
// 登出
export const setLogout = () => {
  removeCookie("userInfo");
  Toast.show({ content: "退出成功", position: "top" });
  return {
    type: LOGOUT,
    data: {},
  };
};
