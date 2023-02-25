import React, { useState, useEffect } from "react";
import { Wrapper, SpanWrapper } from "./Layout";
import { useNavigate } from "react-router-dom";
import { Image } from "./Image";
import logo from "../assets/logo.svg";
import { P } from "./Typography";
import {
  FoundationIcon,
  MiscellaneousServicesIcon,
  ConnectWithoutContactIcon,
  QuestionMarkIcon,
  BarChartIcon,
} from "./Icons";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
const CardWrapper = styled(SpanWrapper)``;
const headerLinks = [
  {
    name: "Home",
    icon: FoundationIcon,
  },
  {
    name: " Services",
    icon: MiscellaneousServicesIcon,
  },
  {
    name: " Contact",
    icon: ConnectWithoutContactIcon,
  },
  {
    name: "About",
    icon: QuestionMarkIcon,
  },
];
const Header = () => {
  const isResponsive = useMediaQuery({ query: "(max-width: 487px)" });
  const [mount, setMount] = useState(false);
  const router = useNavigate();
  const [link, showLink] = useState(0);
  useEffect(() => {
    setMount(true);
  }, []);
  return mount ? (
    <>
      <Wrapper
        color="#012761"
        className="d-flex flex-row justify-content-start align-items-center p-2"
        family="Signika"
      >
        {headerLinks.map((val, index) => {
          return (
            <>
              <CardWrapper
                mb="0px"
                mt="5px"
                ms="15px"
                me="15px"
                key={index}
                onClick={() => {
                  showLink(index);
                  router(`/${index === 0 ? "" : val.name.toLowerCase()}`, {
                    state: index + 1,
                  });
                }}
              >
                <P
                  weight="900"
                  className="mb-0 d-flex flex-row align-items-center"
                  style={{ height: "20px", cursor: "pointer" }}
                  color="#012761"
                  td={index === link ? "underline" : ""}
                >
                  <val.icon />
                  {val.name}
                </P>
              </CardWrapper>
            </>
          );
        })}
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
  ) : (
    <></>
  );
};

export default Header;
