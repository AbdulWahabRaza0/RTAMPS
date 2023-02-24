import React from "react";
import { Wrapper, SpanWrapper } from "./Layout";
import { Image } from "./Image";
import logo from "../assets/logo.svg";
import { P } from "./Typography";
import {
  HomeIcon,
  MiscellaneousServicesIcon,
  ConnectWithoutContactIcon,
  QuestionMarkIcon,
  BarChartIcon,
} from "./Icons";
import { useMediaQuery } from "react-responsive";
const Header = () => {
  const isResponsive = useMediaQuery({ query: "(max-width: 487px)" });
  return (
    <>
      <Wrapper
        bg="#ffc23b"
        color="#012761"
        className="d-flex flex-row justify-content-start align-items-center p-2"
      >
        <SpanWrapper
          mb="0px"
          mt="5px"
          ms="15px"
          me="10px"
          className="d-flex flex-row align-items-center"
        >
          <P
            weight="600"
            className="mb-0 d-flex flex-row align-items-center"
            style={{ height: "20px" }}
          >
            <HomeIcon />
            Home
          </P>
        </SpanWrapper>
        <SpanWrapper mb="0px" mt="5px" ms="15px" me="10px">
          <P
            weight="600"
            className="mb-0 d-flex flex-row align-items-center"
            style={{ height: "20px" }}
          >
            <MiscellaneousServicesIcon />
            Services
          </P>
        </SpanWrapper>
        <SpanWrapper mb="0px" mt="5px" ms="15px" me="10px">
          <P
            weight="600"
            className="mb-0 d-flex flex-row align-items-center"
            style={{ height: "20px" }}
          >
            <ConnectWithoutContactIcon />
            Contact
          </P>
        </SpanWrapper>
        <SpanWrapper mb="0px" mt="5px" ms="15px" me="10px">
          <P
            weight="600"
            className="mb-0 d-flex flex-row align-items-center"
            style={{ height: "20px" }}
          >
            <QuestionMarkIcon />
            About
          </P>
        </SpanWrapper>
      </Wrapper>
      <Wrapper
        className="d-flex flex-row justify-content-center ps-4"
        bg="#012761"
      >
        <Image
          src={logo}
          alt="Logo"
          width={isResponsive ? 250 : 350}
          height={110}
        />
      </Wrapper>
    </>
  );
};

export default Header;
