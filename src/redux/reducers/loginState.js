const init = {};
function loginState(prev = init, action) {
  const { type, data } = action;
  if (type === "Change") {
    return data;
  }
  return prev;
}
export default loginState;
