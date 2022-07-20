import cookies from "react-cookies";
let inFifteenMinutes = new Date(new Date().getTime() + 24 * 3600 * 1000);
// 存储
export const setCookie = (cName, obj) =>
  cookies.save(cName, obj, { expires: inFifteenMinutes });
// 删除
export const removeCookie = (cName) => cookies.remove(cName);
// 读取
export const getCookie = (cName) => cookies.load(cName) || {};
