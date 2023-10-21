import { useState, useEffect } from "react";
import { API_URL } from "../Helper/Constant";

const useAllRestaraunt = () => {
  let [allData, setAllData] = useState([]);
  let [resData, setResData] = useState([]);

  const getRestaurants = async () => {
    let apiData = await fetch(API_URL);
    let apiJson = await apiData.json();
    let resList =
      apiJson.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
    setResData(resList);
    setAllData(resList);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return [allData, resData, setResData];
};

export default useAllRestaraunt;
