import React, { useState } from "react";

const Section = (props) => {
  return (
    <div className="container">
      <h3>{props.name}</h3>
      {!props.isVisble && (
        <button
          className="btn btn-light"
          onClick={() => {
            props.setIsVisible();
          }}
        >
          Show More
        </button>
      )}
      {props.isVisble && <p>{props.description}</p>}
      {props.isVisble && (
        <button
          className="btn btn-light"
          onClick={() => {
            props.setHide();
          }}
        >
          Hide
        </button>
      )}
    </div>
  );
};

const LazyLoadComponent = () => {
  const [sectionConfig, setSectionConfig] = useState("none");

  return (
    <div>
      <Section
        name={"About Instamart"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,Lorem ipsum dolor sit amet, comes from a line in section 1.10.32."
        }
        isVisble={sectionConfig === "about"}
        setIsVisible={() => {
          setSectionConfig("about");
        }}
        setHide={() => {
          setSectionConfig("none");
        }}
      />

      <Section
        name={"Team Info"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,Lorem ipsum dolor sit amet, comes from a line in section 1.10.32."
        }
        isVisble={sectionConfig === "team"}
        setIsVisible={() => {
          setSectionConfig("team");
        }}
        setHide={() => {
          setSectionConfig("none");
        }}
      />

      <Section
        name={"About our coustmer"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,Lorem ipsum dolor sit amet, comes from a line in section 1.10.32."
        }
        isVisble={sectionConfig === "coustemer"}
        setIsVisible={() => {
          setSectionConfig("coustemer");
        }}
        setHide={() => {
          setSectionConfig("none");
        }}
      />
    </div>
  );
};

export default LazyLoadComponent;
