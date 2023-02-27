import React from "react";
import { Wrapper } from "./Layout";
import { Spacer } from "./Spacer";
import { P } from "./Typography";
import { useMediaQuery } from "react-responsive";
const Footer = () => {
  const isResponsive = useMediaQuery({ query: "(max-width: 487px)" });
  return (
    <>
      <Spacer height={isResponsive ? "40px" : "20px"} />

      <Wrapper
        className="d-flex flex-column justify-content-center align-items-center ps-2 pe-2"
        bg="#012761"
        width="100%"
        height="80px"
      >
        <P
          size="18px"
          className="mb-1 pt-1 text-center"
          color="#FFC23B"
          weight="400"
        >
          Copyright &copy;2023
        </P>
        <P
          className="mb-0 text-center"
          color="#FFC23B"
          weight="500"
          size={isResponsive ? "14px" : "16px"}
        >
          in the meeting tomorrow to the client to sign the contract and return
          the original document. Islamabad
        </P>
      </Wrapper>
    </>
  );
};

export default Footer;
