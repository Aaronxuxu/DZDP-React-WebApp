import ajax from "./pottingAjax";
export const getCatetory = () => ajax("/api/home/category", {}, "get");
export const getHomeTweet = () => ajax("/api/home/tweet/list", {}, "get");
