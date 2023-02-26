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
        <P size="18px" className="mb-1" color="#FFC23B" weight="400">
          Copyright &copy;2023
        </P>
        <P className="mb-0" color="#FFC23B" weight="500">
          in the meeting tomorrow to the client to sign the contract and return
          the original document. Islamabad
        </P>
      </Wrapper>
    </>
  );
};

export default Footer;
