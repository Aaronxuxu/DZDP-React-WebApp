import ajax from "./pottingAjax";
export const getCatetory = () => ajax("/api/manage/category", {}, "get");
export const getHomeTweet = (obj) => ajax("/api/manage/tweet/list", obj, "get");
export const getCatetoryList = (target) =>
  ajax("/api/manage/category/list", target, "get");
export const getTweetCommends = (obj) =>
  ajax("/api/manage/tweet/commends", obj, "get");
