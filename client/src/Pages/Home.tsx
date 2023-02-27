import React from "react";
import { Wrapper, SpanWrapper, Row, Col } from "../Components/Layout";
import { CardComp } from "../Components/Layout";
import { Spacer } from "../Components/Spacer";
import { P } from "../Components/Typography";
import { Image } from "../Components/Image";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
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
];
const LinksData = ["About the NCBI", "Mission", "Organization", " NCBI News"];
const CardStyle = styled(Wrapper)`
  cursor: pointer;
  color: #012761;
  &:hover {
    box-shadow: 5px 5px 10px 5px gray;
  }
`;
const Home = () => {
  const router = useNavigate();
  const isResponsive = useMediaQuery({ query: "(max-width: 487px)" });

  return (
    <>
      <Wrapper>
        <Spacer height="30px" />
        <Wrapper className="d-flex flex-row align-items-center justify-content-center ms-2 me-2">
          <P
            weight="700"
            size="20px"
            color="#012761"
            className="text-center mb-0"
          >
            RTAMPS is a comprehensive freely accessible real time database of
            anti microbial peptides from different origins
          </P>
        </Wrapper>

        <Spacer height="40px" />
        <Wrapper ms="20%" me="20%" family="Signika">
          <Row className="align-items-center justify-content-center">
            {CardsData.map((val, index) => {
              return (
                <>
                  <Col
                    md={4}
                    sm={4}
                    lg={4}
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
                        router(`/${val.name}`, {
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
