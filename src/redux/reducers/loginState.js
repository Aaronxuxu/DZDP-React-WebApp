import { getCookie } from "../../config/cookies";
const init = getCookie("userInfo");
function loginState(prev = init, action) {
  const { type, data } = action;
  switch (type) {
    case "LOGIN":
      return data;
    case "LOGOUT":
      return {};
    default:
      return prev;
  }
}
export default loginState;
