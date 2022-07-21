import { getCookie } from "../../config/cookies";
import { LOGIN, LOGOUT } from "../../config/constant";
const init = getCookie("userInfo");
function loginState(prev = init, action) {
  const { type, data } = action;
  switch (type) {
    case LOGIN:
      return data;
    case LOGOUT:
      return {};
    default:
      return prev;
  }
}
export default loginState;
