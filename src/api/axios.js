import ajax from "./pottingAjax";
export const getCatetory = () => ajax("/api/home/category", {}, "get");
