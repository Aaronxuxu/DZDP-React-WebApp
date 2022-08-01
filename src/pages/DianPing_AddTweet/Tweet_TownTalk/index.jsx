import React, { forwardRef, useImperativeHandle } from "react";
function TweetTownTalk(prpos, ref) {
  useImperativeHandle(ref, () => {});
  return <div>话题（暂不写，跟地址位置差不多。）</div>;
}
export default forwardRef(TweetTownTalk);
