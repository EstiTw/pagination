import React from "react";

const Follower = ({ login, avatar_url: image, html_url }) => {
  return (
    <article className="card">
      <img src={image} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className="btn">
        view profile
      </a>
    </article>
  );
};

export default Follower;
