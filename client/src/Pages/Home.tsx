import React from "react";
import { Wrapper, SpanWrapper } from "../Components/Layout";
import { CardComp } from "../Components/Layout";
import { Spacer } from "../Components/Spacer";
import { P } from "../Components/Typography";
import styled from "styled-components";
import {
  PublishIcon,
  DownloadIcon,
  LocalLibraryIcon,
  BuildIcon,
} from "../Components/Icons";
const CardsData = [
  {
    name: "Submit",
    desc: "Deposit Data on manuscripts into NCBI database",
    src: "/assets/submit.svg",
    icon: PublishIcon,
  },
  {
    name: "Download",
    desc: "Transfer NCBI data to your computer",
    src: "/assets/download.svg",
    icon: DownloadIcon,
  },
  {
    name: "Learn",
    desc: "Find help documents, attend a class or watch a tutorial",
    src: "/assets/learn.svg",
    icon: LocalLibraryIcon,
  },
  {
    name: "Develop",
    desc: "Use NCBI APIs and code libraries to build projects",
    src: "/assets/develop.svg",
    icon: BuildIcon,
  },
  {
    name: "Analyze",
    desc: "Identify an NCBI tool for your data analyze task",
    src: "/assets/analyze.svg",
  },
  {
    name: "Research",
    desc: "Explore NCBI research and collaborative projects",
    src: "/assets/research.svg",
  },
];
const LinksData = ["About the NCBI", "Mission", "Organization", " NCBI News"];
const LinkStyle = styled(P)`
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
const Home = () => {
  return (
    <>
      <Wrapper>
        <Spacer height="30px" />
        <Wrapper family="Figtree" className="text-center">
          <P weight="900" size="30px">
            NEXT GEN
          </P>
          <P weight="700" size="30px">
            WEB3 INTELLIGENCE
          </P>
        </Wrapper>
        {/* <Wrapper ms="3%">
          <P className="mb-1" weight="700" size="18px" color="#012761">
            Welcome to NCBI
          </P>
          <P size="14px" className="mb-2">
            The National Center for Biotechnology Information advances science
            and health by providing access to biomedical and genomic
            information.
          </P>
        </Wrapper> */}
        <Spacer height="40px" />
        <Wrapper ms="10%" me="10%">
          <Wrapper className="d-flex flex-row flex-wrap align-items-center">
            {CardsData.map((val, index) => {
              return (
                <>
                  <SpanWrapper key={index} mt="5px" mb="5px" ms="5px" me="5px">
                    <CardComp name={val.name} desc={val.desc} src={val.src} />
                  </SpanWrapper>
                </>
              );
            })}
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Home;
