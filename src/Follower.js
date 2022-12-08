import React from "react";

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className="card">
      follower component
      <img src={avatar_url} alt="nothing" />
      <h4>{login}</h4>
      <a href={html_url} className="btn">
        View profile
      </a>
    </article>
  );
};

export default Follower;
