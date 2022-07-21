import React from "react";
import { connect } from "react-redux";
import { DotLoading, Card, List } from "antd-mobile";
function UserLikes(props) {
  console.log(props);
  return <div>3</div>;
}
export default connect(
  (state) => ({ userID: state.loginState.id }),
  {}
)(UserLikes);
