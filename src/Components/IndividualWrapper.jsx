import React from "react";
import { useLocation } from "react-router-dom";
import { useGetSelectedCard } from "../Apis/Apis";

const IndividualWrapper = () => {
  const location = useLocation();
  const { id, contentType } = location.state;
  const getSelctedData = useGetSelectedCard(id, contentType);
  console.log(getSelctedData);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default IndividualWrapper;
