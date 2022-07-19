import React from "react";
import { connect } from "react-redux";
function UserCollect() {
  return <div>1</div>;
}
export default connect(
  (state) => ({ userID: state.loginState.id }),
  {}
)(UserCollect);
