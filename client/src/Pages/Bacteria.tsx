import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Wrapper } from "../Components/Layout";
import { P } from "../Components/Typography";
import { Input } from "../Components/Inputs";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import usePagination from "../Components/Pagination";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { default as data } from "../utils/MOCK_DATA.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "react-bootstrap/Dropdown";
const Bacteria = () => {
  const location = useLocation();
  const { state } = location;
  const [mount, setMount] = useState(false);
  let [page, setPage] = useState(1);
  const [dropdown, setDropDown] = useState("");
  const PER_PAGE = 10;
  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  useEffect(() => {
    setMount(true);
  }, [location]);
  const handleChange = (e: any, p: any) => {
    setPage(p);
    console.log("This is page ", p);
    _DATA.jump(p);
  };

  return mount ? (
    <>
      <Wrapper className="d-flex flex-row justify-content-center align-items-center mt-5">
        <Wrapper
          className="d-flex flex-row position-relative"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            height: "40px",
          }}
        >
          <Dropdown style={{}}>
            <Dropdown.Toggle variant="standard">Open Menu</Dropdown.Toggle>
            <Dropdown.Menu style={{ width: "100px" }}>
              <Dropdown.Item style={{ width: "100px" }} href="#">
                Home Page
              </Dropdown.Item>
              <Dropdown.Item href="#">Settings</Dropdown.Item>
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Input placeholder="Search" />
          <Wrapper
            className="position-absolute"
            style={{ right: 10, top: 6.4 }}
          >
            <SearchIcon />
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Wrapper
        className="d-flex flex-column justify-content-center align-items-center mt-5"
        width="100%"
      >
        <Stack spacing={2} className="mb-5">
          <Pagination
            count={count}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
            onChange={handleChange}
          />
        </Stack>
        <Wrapper>
          <P weight="500" color="#012761">
            Page {page} to {PER_PAGE} of {count}
          </P>
          {_DATA.currentData().map((v: any, index: any) => {
            return (
              <>
                <div key={index} className="mt-4">
                  {/* {index + page} */}
                  {/* <span>{v.sku}</span> <span> {v.category_type}</span>
                  <span>
                    <P color="#0f4211">${v.msrp}</P>
                  </span> */}
                  <Wrapper className="d-flex flex-row">
                    <P
                      className="mb-0 me-4"
                      weight="700"
                      size="20px"
                      color="#012761"
                    >
                      {index + page * PER_PAGE - 9}.
                    </P>
                    <Wrapper className="d-flex flex-column">
                      <P
                        weight="700"
                        size="20px"
                        className="mb-1"
                        color="#012761"
                      >
                        antimicrobial peptides [Oryza sativa Japonica Group]
                      </P>
                      <P weight="500" className="mb-0">
                        392 aa protein
                      </P>
                      <P size="12px" className="mb-1">
                        Accession: XP_015615526.1 GI: 1002304331
                      </P>
                    </Wrapper>
                  </Wrapper>
                </div>
              </>
            );
          })}
        </Wrapper>

        <Stack spacing={2} className="mt-5">
          <Pagination
            count={count}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
            onChange={handleChange}
          />
        </Stack>
      </Wrapper>
    </>
  ) : (
    <></>
  );
};

export default Bacteria;
