import React from "react";
import { connect } from "react-redux";
function UserEvaluate() {
  return <div>2</div>;
}
export default connect(
  (state) => ({ userID: state.loginState.id }),
  {}
)(UserEvaluate);
