import React from "react";

const Member = (props) => {
  return (
    <div className="team-pic">
      <div className="team-circle">
        <img alt="member" src={props.pic} />
      </div>
      <div className="team-detail">
        <p className="team-name">{props.name}</p>
        <p className="team-nim">{props.nim}</p>
      </div>
    </div>
  );
};

export default Member;
