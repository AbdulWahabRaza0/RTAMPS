import React from "react";
import { Wrapper } from "./Layout";
import { Spacer } from "./Spacer";
import { P } from "./Typography";
const Footer = () => {
  return (
    <>
      <Spacer height="50px" />

      <Wrapper
        className="d-flex flex-column justify-content-center align-items-center"
        bg="#012761"
        width="100%"
        height="120px"
        family="Signika"
      >
        <P className="mb-0" color="white" weight="400">
          All Rights Reserved &copy;2023
        </P>
        <P className="mb-0" color="white" weight="500">
          Affiliated Authornate
        </P>
      </Wrapper>
    </>
  );
};

export default Footer;
