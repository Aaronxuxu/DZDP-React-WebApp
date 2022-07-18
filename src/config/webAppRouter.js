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
    routeName: "我的",
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
];
export default RouteLists;
