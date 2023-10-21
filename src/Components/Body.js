import React, { useState } from "react";
import { imageBaseUrl } from "../Helper/Constant";
import { Link } from "react-router-dom";

import RestrauntCard from "./RestrauntCard";
import Loader from "./Loader";
import { filterData } from "../Helper/Helper";
import useAllRestaraunt from "../hooks/useAllRestaraunt";
import useOnline from "../hooks/useOnline";
import SearchBar from "./SearchBar";

const Body = () => {
  let [inputSearch, setInputSearch] = useState("");
  let [allData, resData, setResData] = useAllRestaraunt();
  let isOnline = useOnline();

  const onCHangeInput = (e) => {
    setInputSearch(e.target.value);
  };

  if (!isOnline) {
    return <h1>You Are Offline, Please check our Internet connection! </h1>;
  }

  if (allData.length === 0) {
    return <Loader />;
  } else {
    return (
      <>
        <SearchBar allData={allData} setResData={setResData} />
        <div className="body">
          {resData.length === 0 ? (
            <h1>No Such Restaurant Found</h1>
          ) : (
            resData.map((res) => {
              return (
                <Link
                  className="card"
                  style={{ width: "17rem" }}
                  key={res.info.id}
                  to={`/restaurant/${res.info.id}`}
                >
                  <RestrauntCard
                    img={imageBaseUrl + res.info.cloudinaryImageId}
                    name={res.info.name}
                    Cusines={res.info.cuisines}
                    Ratting={res.info.avgRating}
                  />
                </Link>
              );
            })
          )}
        </div>
      </>
    );
  }
};

export default Body;
