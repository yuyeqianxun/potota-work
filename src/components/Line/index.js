import React, { memo } from "react";
// import "./index.less";

export default memo(function Line(props) {
  const { img, name, desc, icon, round, index } = props;

  const imgs = (() => {
    if (img) {
      return <img src={img} className={round ? "line-img round" : "line-img"} alt="" />;
    } else {
      return <span className="line-index">{index + 1}</span>;
    }
  })();

  return (
    <div className="line">
      <div className="line-left">
        {imgs}
        <div className="line-main">
          <div className="line-name">{name}</div>
          {
              desc&&<div className="line-desc">{desc}</div>
          }
        </div>
      </div>
      <i className={"iconfont line-right icon" + icon}></i>
    </div>
  );
});
