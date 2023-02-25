import React from "react";
import { Wrapper, SpanWrapper, Row, Col } from "../Components/Layout";
import { CardComp } from "../Components/Layout";
import { Spacer } from "../Components/Spacer";
import { P } from "../Components/Typography";
import { Image } from "../Components/Image";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  PublishIcon,
  DownloadIcon,
  LocalLibraryIcon,
  BuildIcon,
  BarChartIcon,
  BiotechIcon,
} from "../Components/Icons";
const CardsData = [
  {
    name: "Bacteria",
    src: "/assets/bacteria.png",
  },
  {
    name: "Virus",
    src: "/assets/virus.png",
  },
  {
    name: "Archea",
    src: "/assets/archea.png",
  },
  {
    name: "Fungi",
    src: "/assets/fungi.png",
  },
  {
    name: "Animal",
    src: "/assets/animal.png",
  },
  {
    name: "Plants",
    src: "/assets/plants.png",
  },
  {
    name: "Protist",
    src: "/assets/protist.png",
  },
  {
    name: "Protozoa",
    src: "/assets/protozoa.png",
  },
];
const LinksData = ["About the NCBI", "Mission", "Organization", " NCBI News"];
const CardStyle = styled(Wrapper)`
  cursor: pointer;
  color: #012761;
  &:hover {
    background: #f4ea56;
  }
`;
const Home = () => {
  const router = useNavigate();

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

        <Spacer height="40px" />
        <Wrapper ms="10%" me="10%" family="Signika">
          <Row className="align-items-center justify-content-center">
            {CardsData.map((val, index) => {
              return (
                <>
                  <Col
                    md={3}
                    sm={3}
                    lg={3}
                    className="d-flex flex-row justify-content-center"
                    style={{ marginTop: "43px", marginBottom: "43px" }}
                  >
                    <CardStyle
                      width="70%"
                      height="145px"
                      border="1px solid gray"
                      borderRadius="10px"
                      className="text-center pt-3"
                      onClick={() => {
                        router(`/${val.name.toLowerCase()}`, {
                          state: index + 1,
                        });
                      }}
                    >
                      <P size="27px" weight="700" className="mb-3">
                        {val.name}
                      </P>
                      <Image
                        src={val.src}
                        alt="Submit"
                        width={75}
                        height={75}
                      />
                    </CardStyle>
                  </Col>
                </>
              );
            })}
          </Row>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Home;
