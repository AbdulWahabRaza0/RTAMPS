import React from "react";
import { Wrapper, SpanWrapper, Row, Col } from "../Components/Layout";
import { CardComp } from "../Components/Layout";
import { Spacer } from "../Components/Spacer";
import { P } from "../Components/Typography";
import { Image } from "../Components/Image";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Select } from "../Components/Buttons";
import { SearchInput } from "../Components/Inputs";
import { useMediaQuery } from "react-responsive";
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
  // {
  //   name: "Archea",
  //   src: "/assets/archea.png",
  // },
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
  // {
  //   name: "Protozoa",
  //   src: "/assets/protozoa.png",
  // },
];
const LinksData = ["About the NCBI", "Mission", "Organization", " NCBI News"];
const CardStyle = styled(Wrapper)`
  cursor: pointer;
  color: #012761;
  &:hover {
    // background: #f4ea56;
    box-shadow: 10px 10px 10px #f4ea56;
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
          <Select
            ps={isResponsive ? "0px" : "25px"}
            pe={isResponsive ? "0px" : "25px"}
            fontSize={isResponsive ? "16px" : "21px"}
            name="bioMedical"
            id="bioMedical"
          >
            <option value="AMPs Name">AMPs Name</option>
            <option value="GI No">GI No</option>
            <option value="Accession No">Accession No</option>
          </Select>
          <SearchInput className={isResponsive ? "ms-1 me-1" : "ms-3 me-3"} />
          <Button
            ps={isResponsive ? "10px" : "25px"}
            pe={isResponsive ? "10px" : "25px"}
            fontSize={isResponsive ? "16px" : "21px"}
          >
            Search
          </Button>
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
                      style={{ boxShadow: "5px 5px 5px gray" }}
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
