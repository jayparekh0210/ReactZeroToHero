import React, { useContext } from "react";

import userContext from "../Helper/userContext";

const RestrauntCard = (props) => {
  const { user } = useContext(userContext);
  return (
    <>
      <img className="card-img-top" src={props.img} alt="Card-Image" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-text">Cusines: {props.Cusines.join(", ")}</h6>
        <hr />
        <h6>{user.name}</h6>
        <p className="list-group-item">Ratting: {props.Ratting} </p>
      </div>
    </>
  );
};

export default RestrauntCard;
