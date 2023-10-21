import React from "react";

const Loader = () => {
  return (
    <>
      <div className="search-container">
        <div className="input-shimmer"></div>
        <div className="button-shimmer"></div>
      </div>
      <div className="body">
        {Array(10)
          .fill("")
          .map((res, id) => {
            return <div key={id} className="card-shimmer" />;
          })}
      </div>
    </>
  );
};

export default Loader;
