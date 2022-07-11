import jsonp from "jsonp";
import { Toast } from "antd-mobile";
function apiJsonp(url, obj) {
  return new Promise((resolve, rejcet) => {
    jsonp(url, {}, function (err, data) {
      const { status, msg, result } = data;
      if (!err && status === 0) {
        return resolve(result);
      } else {
        Toast.show({
          icon: "fail",
          content: "获取api接口数据失败，原因是：" + msg,
          position: "top",
        });
        return resolve([]);
      }
    });
  });
}
export default apiJsonp;
