import { lazy } from "react";
const RouteLists = [
  {
    routeName: "城市",
    path: "city/",
    element: lazy(() => import("../pages/DianPing_City")),
  },
  {
    routeName: "首页",
    path: "home/",
    element: lazy(() => import("../pages/DianPing_Home")),
  },
  {
    routeName: "搜索",
    path: "search/:city",
    element: lazy(() => import("../pages/DianPing_Search")),
  },
  {
    routeName: "用户中心",
    path: "user/",
    element: lazy(() => import("../pages/DianPing_User")),
  },
  {
    routeName: "商品详情",
    path: "good_detail/",
    element: lazy(() => import("../pages/DianPing_Good_Detail")),
  },
  {
    routeName: "推文详情",
    path: "tweet_detail/",
    element: lazy(() => import("../pages/DianPing_Tweet_Detail")),
  },
  {
    routeName: "404",
    path: "*",
    element: lazy(() => import("../pages/DianPing_404")),
  },
  {
    routeName: "发笔记",
    path: "add_tweet/",
    element: lazy(() => import("../pages/DianPing_AddTweet")),
  },
  {
    routeName: "收藏/评价/点赞",
    path: "my/",
    element: lazy(() => import("../pages/DianPing_My")),
    children: [
      { path: "", element: lazy(() => import("../pages/DianPing_My/My_Col")) },
      {
        path: "eva/",
        element: lazy(() => import("../pages/DianPing_My/My_Eva")),
      },
      {
        path: "likes/",
        element: lazy(() => import("../pages/DianPing_My/My_Likes")),
      },
      {
        path: "col/",
        element: lazy(() => import("../pages/DianPing_My/My_Col")),
      },
    ],
  },
  {
    path: "login/",
    element: lazy(() => import("../pages/DianPing_Login")),
  },
];
export default RouteLists;
