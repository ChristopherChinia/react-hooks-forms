import React,{useState} from "react";

const DisplayData = ({firstName, lastName}) => {
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
    </div>
  );
};

export default DisplayData;
