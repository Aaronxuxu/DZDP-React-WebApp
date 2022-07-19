import React from "react";
import { connect } from "react-redux";
function UserLikes() {
  return <div>3</div>;
}
export default connect(
  (state) => ({ userID: state.loginState.id }),
  {}
)(UserLikes);
