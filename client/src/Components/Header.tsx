import React from "react";
import { Wrapper } from "./Layout";
import { Image } from "./Image";
import { InfoIcon, HelpIcon, LoginIcon, HowToRegIcon } from "./Icons";
import logo from "../assets/logo.svg";
// const iconsArray = [InfoIcon, HelpIcon, LoginIcon, HowToRegIcon];
const Header = () => {
  return (
    <>
      <Wrapper className="d-flex flex-row justify-content-end">
        <InfoIcon style={{ color: "#012761" }} />
        <HelpIcon style={{ color: "#012761" }} />
        <HowToRegIcon style={{ color: "#012761" }} />
        <LoginIcon style={{ color: "#012761" }} />
      </Wrapper>
      <Wrapper
        className="d-flex flex-row justify-content-between ps-4"
        bg="#012761"
      >
        <Image src={logo} alt="Logo" width={350} height={110} />
      </Wrapper>
    </>
  );
};

export default Header;
