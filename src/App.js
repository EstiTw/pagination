import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
import paginate from "./utils";

const PERPAGE = 10;
function App() {
  const { loading, data } = useFetch();
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(6);
  const [pageData, setPageData] = useState([]);

  const generatePagesButtons = () => {
    const buttons = [];
    for (let i = 1; i <= pages; i++) buttons[i] = i;
    return buttons;
  };

  const handlePaginate = (index) => {
    setCurrentPage(index);
    const pageData = paginate(currentPage, PERPAGE, data);
    setPageData(pageData);
  };

  useEffect(() => {
    setPages(data.length / PERPAGE);
    if (data.length > 0) handlePaginate(6);
  }, [loading]);

  if (loading) return <h2 className="section-title">Loading...</h2>;
  else {
    return (
      <section className="section followers">
        <h2 className="section-title">followers</h2>
        <div className="underline"></div>
        <div className="container">
          {pageData.map((item) => {
            return <Follower key={item.id} {...item} />;
          })}
        </div>
        <div className="btn-container">
          <button
            className="prev-btn btn"
            onClick={() => handlePaginate(currentPage - 1)}
          >
            prev
          </button>
          {generatePagesButtons().map((index) => (
            <button
              key={index}
              className={`page-btn btn ${
                currentPage === index ? "active-btn" : ""
              }`}
              onClick={() => handlePaginate(index)}
            >
              {index}
            </button>
          ))}
          <button
            className="next-btn btn"
            onClick={() => handlePaginate(currentPage + 1)}
          >
            next
          </button>
        </div>
      </section>
    );
  }
}

export default App;
