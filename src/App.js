/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  console.log(data);
  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);
  const handlePage = (index) => {
    setPage(index);
  };
  const nextPage = () => {
    setPage((prev) => {
      let nextIndex = prev + 1;
      if (nextIndex > data.length - 1) {
        nextIndex = 0;
      }
      return nextIndex;
    });
  };
  const prevPage = () => {
    setPage((prev) => {
      let preIndex = prev - 1;
      if (preIndex < 0) {
        preIndex = data.length - 1;
      }
      return preIndex;
    });
  };
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "Loading..." : "Pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {loading ? null : (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  type="button"
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  onClick={() => {
                    handlePage(index);
                  }}
                  key={index}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
