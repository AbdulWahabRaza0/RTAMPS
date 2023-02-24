import React from "react";
import { Wrapper } from "./Layout";
import { Spacer } from "./Spacer";
const Footer = () => {
  return (
    <>
      <Spacer height="50px" />

      <Wrapper bg="#012761" width="100%" height="120px"></Wrapper>
      <Wrapper bg="#ffc23b" width="100%" height="30px">
        <Wrapper className="d-flex flex-row justify-content-end"></Wrapper>
      </Wrapper>
    </>
  );
};

export default Footer;
