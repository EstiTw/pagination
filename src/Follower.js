import React from "react";

const Follower = ({ login, avatar_url: image, html_url: profile }) => {
  return (
    <div className="card">
      <img src={image} alt={login} />
      <h4>{login}</h4>
      <a href={profile}>view profile</a>
    </div>
  );
};

export default Follower;
