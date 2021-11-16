import React from "react";
import User from "../../Assets/image/Portrait_Placeholder.png";

const Member = (props) => {
  return (
    <div className="team-pic">
      <div className="team-circle">
        <img alt="member" src={User} />
      </div>
      <div className="team-detail">
        <p className="team-name">{props.name}</p>
        <p className="team-nim">{props.nim}</p>
        <a href={props.ig} className="team-ig">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Member;
