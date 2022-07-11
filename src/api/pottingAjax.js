import axios from "axios";
import { Toast } from "antd-mobile";
function ajax(url, data = {}, method = "get") {
  return new Promise((resolve, reject) => {
    axios({
      url: "",
      method: "",
      data: "",
    });
    let promise;
    if (method === "get") {
      promise = axios.get(url, { params: data });
    } else {
      promise = axios.post(url, data);
    }
    promise
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        Toast.show({
          icon: "fail",
          position: "top",
          content: "数据请求失败，原因：" + err,
        });
      });
  });
}
export default ajax;
