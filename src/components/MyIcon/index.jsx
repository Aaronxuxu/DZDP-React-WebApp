import React from "react";
function MyIcon(props) {
  const { iconName } = props;
  return <i className={iconName}></i>;
}
export default MyIcon;
