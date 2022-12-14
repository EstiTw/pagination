import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(6);
  const [followers, setFollowers] = useState([]);

  const handlePage = (index) => {
    setPage(index);
  };

  const prevPage = () => {
    setPage((oldPage) => (oldPage === 0 ? data.length - 1 : oldPage - 1));
  };
  const nextPage = () => {
    setPage((oldPage) => (oldPage === data.length - 1 ? 0 : oldPage + 1));
  };

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

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
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn btn" onClick={prevPage}>
              prev
            </button>
            {data.map((_, index) => (
              <button
                key={index}
                className={`page-btn ${index === page ? "active-btn" : ""}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            ))}
            <button className="next-btn btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
