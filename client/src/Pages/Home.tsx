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
        <Spacer height={isResponsive ? "20px" : "30px"} />
        <Wrapper className="d-flex flex-row align-items-center justify-content-center ms-2 me-2">
          <P
            weight="700"
            size={isResponsive ? "16px" : "20px"}
            color="#012761"
            className="text-center mb-0"
          >
            RTAMPS is a comprehensive freely accessible real time database of
            anti microbial peptides from different origins
          </P>
        </Wrapper>

        <Spacer height={isResponsive ? "40px" : "12px"} />
        <Wrapper
          ms={isResponsive ? "0%" : "20%"}
          me={isResponsive ? "0%" : "20%"}
          family="Signika"
        >
          <Row className="align-items-center justify-content-center">
            {CardsData.map((val, index) => {
              return (
                <>
                  <Col
                    // md={isResponsive ? 2 : 4}
                    // sm={isResponsive ? 2 : 4}
                    // lg={isResponsive ? 2 : 4}
                    xs={4}
                    className="d-flex flex-row justify-content-center"
                    style={{
                      marginTop: isResponsive ? "15px" : "20px",
                      marginBottom: isResponsive ? "15px" : "20px",
                    }}
                  >
                    <CardStyle
                      width={isResponsive ? "100%" : "70%"}
                      height={isResponsive ? "100px" : "125px"}
                      border="1px solid gray"
                      borderRadius="10px"
                      className="text-center pt-2"
                      onClick={() => {
                        router(`/${val.name}`, {
                          state: index + 1,
                        });
                      }}
                    >
                      <P
                        size={isResponsive ? "21px" : "27px"}
                        weight="700"
                        className="mb-1"
                      >
                        {val.name}
                      </P>
                      <Image
                        src={val.src}
                        alt="Submit"
                        width={isResponsive ? 50 : 75}
                        height={isResponsive ? 50 : 75}
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
