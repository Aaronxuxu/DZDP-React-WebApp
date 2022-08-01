import ajax from "./pottingAjax";
// 登录
export const login = (obj) =>
  ajax("/api/user/login", { userInfo: obj }, "post");

// 获取分类
export const getCatetory = () => ajax("/api/manage/category", {}, "get");

// 获取首页推文推荐
export const getHomeTweet = (obj) => ajax("/api/manage/tweet/list", obj, "get");

// 获取推文评论
export const getTweetCommends = (obj) =>
  ajax("/api/manage/tweet/commends", obj, "get");

// 添加推文
export const addTweet = (val) => ajax("/api/manage/tweet/add", val, "post");

// 获取分类详细商品
export const getCatetoryList = (target) =>
  ajax("/api/manage/category/list", target, "get");

// 获取登录用户评价
export const getLoginUserCom = (id) =>
  ajax("/api/manage/user/com", { id }, "get");

// 获取登录用户收藏
export const getLoginUserCol = (obj) =>
  ajax("/api/manage/user/col", obj, "get");

// 获取登录用户点赞
export const getLoginUserLikes = (id) =>
  ajax("/api/manage/user/likes", { id }, "get");
