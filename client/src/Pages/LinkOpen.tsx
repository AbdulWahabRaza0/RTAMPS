import React from "react";
import { Wrapper } from "../Components/Layout";
import { useLocation } from "react-router";
const LinkOpen = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <>
      <Wrapper className="mt-5 mb-5 ms-5 me-5">{state}</Wrapper>
    </>
  );
};

export default LinkOpen;
