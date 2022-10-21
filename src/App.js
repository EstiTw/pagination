import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(6);
  const [followers, setFollowers] = useState([]);

  const generatePagesButtons = () => {
    const buttons = [];
    for (let i = 1; i <= data.length; i++) buttons[i] = i;
    return buttons;
  };

  const hanldePaginate = (index) => {
    setPage(index);
    setFollowers(data[index - 1]);
  };

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page - 1]);
  }, [loading]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "Loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers &&
            followers.map((item) => {
              return <Follower key={item.id} {...item} />;
            })}
        </div>
        <div className="btn-container">
          <button
            className="prev-btn btn"
            onClick={() => hanldePaginate(page - 1)}
          >
            prev
          </button>
          {generatePagesButtons().map((index) => (
            <button
              key={index}
              className={`page-btn btn ${page === index ? "active-btn" : ""}`}
              onClick={() => hanldePaginate(index)}
            >
              {index}
            </button>
          ))}
          <button
            className="next-btn btn"
            onClick={() => hanldePaginate(page + 1)}
          >
            next
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
