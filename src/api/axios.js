import ajax from "./pottingAjax";
export const getCatetory = () => ajax("/api/manage/category", {}, "get");
export const getHomeTweet = () => ajax("/api/manage/tweet/list", {}, "get");
export const getCatetoryList = (target) =>
  ajax("/api/manage/category/list", target, "get");
