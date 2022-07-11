const init = "广东";
const targetCity = (prev = init, action) => {
  const { type, data } = action;
  switch (type) {
    case "Change":
      return data;
    default:
      return prev;
  }
};
export default targetCity;
