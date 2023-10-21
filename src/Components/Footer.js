import React, { useContext } from "react";
import userContext from "../Helper/userContext";

const Footer = () => {
  const { user } = useContext(userContext);
  return (
    <>
      <h4>Footer</h4>
      <h6>Created By: {user.name}</h6>
    </>
  );
};

export default Footer;
