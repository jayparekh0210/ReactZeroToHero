import React from "react";
import { useParams } from "react-router-dom";
import { imageBaseUrl } from "../Helper/Constant";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import useRestarauntMenu from "../hooks/useRestarauntMenu";
import { addItem } from "../Helper/CartSlice";

const RestaurantDetail = () => {
  const params = useParams();
  const [resName, menu] = useRestarauntMenu(params.id);
  const dispatch = useDispatch();

  const handelAddItem = () => {
    dispatch(addItem("Grapesh"));
  };

  return !menu ? (
    <Loader />
  ) : (
    <div className="res-detail">
      <div className="resdetai-image">
        <h3>{resName.name}</h3>
        <img src={imageBaseUrl + resName.cloudinaryImageId} />
        <h5>
          {`Adress : ${resName.locality}, ${resName.areaName}, ${resName.city}`}
        </h5>
        <h6>{`Rating : ${resName.avgRating}/5`}</h6>
        <button className="btn" onClick={() => handelAddItem()}>
          +Add Item
        </button>
        {Array(18)
          .fill("")
          .map((resReview) => {
            return (
              <p>
                Some dummy reviews
                ...............................................
              </p>
            );
          })}
      </div>
      <ul>
        {menu.map((menuItem) => {
          return (
            <li>
              <h6>{menuItem.card.info.name}</h6>
              <p>{`${menuItem.card.info.price / 100} rs`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantDetail;
