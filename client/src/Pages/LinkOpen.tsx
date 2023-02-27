import React, { useState, useEffect } from "react";
import { Wrapper, Row, Col } from "../Components/Layout";
import { P } from "../Components/Typography";
import { useLocation } from "react-router";
import { Spacer } from "../Components/Spacer";
import { Image } from "../Components/Image";
const LinkOpen = () => {
  const location = useLocation();
  const { state } = location;
  const { name, data } = state;
  const [mount, setMount] = useState(false);
  useEffect(() => {
    if (!name || !data) {
      setMount(false);
    } else {
      setMount(true);
    }
  }, []);
  return mount ? (
    <>
      <Wrapper className="mt-5 mb-5 ms-5 me-5">
        {name === "link1" ? (
          <>
            <Wrapper>
              <ol>
                <li className="container container-fluid">
                  <Row
                    style={{
                      width: "auto",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <P td="underline" size="21px" weight="500" className="mb-5">
                      {data.aminoAcid.name}:
                    </P>

                    {data.aminoAcid.data.map((val: any, index: any) => {
                      return (
                        <>
                          <Col md={6} lg={6} xs={6} key={index}>
                            <Wrapper
                              width="70%"
                              className="d-flex flex-row justify-content-between ms-5"
                            >
                              <P>{val.name}</P>
                              <P>{val.val}</P>
                            </Wrapper>
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </li>

                {data.remainData.map((val: any, index: any) => {
                  return (
                    <>
                      <li
                        key={index}
                        className="mt-4 container container-fluid"
                      >
                        <Wrapper
                          className="d-flex flex-row justify-content-between"
                          style={{
                            width: "65%",
                          }}
                        >
                          <P
                            td="underline"
                            size="21px"
                            weight="500"
                            className="ms-3"
                          >
                            {val.name}:
                          </P>
                          <Wrapper width="20%">
                            <P className="ms-5" size="16px">
                              {val.val}
                            </P>
                          </Wrapper>
                        </Wrapper>
                      </li>
                    </>
                  );
                })}
              </ol>
            </Wrapper>
          </>
        ) : null}
        {name === "link2" ? (
          <>
            <Spacer height="6px" />
            <Wrapper className="mt-5 mb-5 ms-5 me-5">
              <P size="21px" weight="600">
                {data.fastaTab.title}
              </P>
              <P tt="underline" color="gray">
                {data.fastaTab.link}
              </P>
              <P>{data.fastaTab.ref}</P>
            </Wrapper>
            <Spacer height="40px" />
          </>
        ) : null}
        {name === "link3" ? (
          <>
            <Wrapper className="mt-5 mb-5 ms-0 me-5">
              <P td="underline" size="25px" weight="600">
                {data.name}:
              </P>
              <Image
                className="img-fluid ms-5"
                src={data.struct.img}
                alt="Structure"
                width={450}
                height={200}
              />
            </Wrapper>
          </>
        ) : null}
      </Wrapper>
    </>
  ) : (
    <>No Data Found...</>
  );
};

export default LinkOpen;
