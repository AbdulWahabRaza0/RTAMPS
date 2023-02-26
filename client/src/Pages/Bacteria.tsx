import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Wrapper } from "../Components/Layout";
import { P } from "../Components/Typography";
import { Input } from "../Components/Inputs";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
// import usePagination from "../Components/Pagination";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { default as data } from "../utils/MOCK_DATA.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "react-responsive";
import { Select, Button } from "../Components/Buttons";
import { SearchInput } from "../Components/Inputs";
import { Spacer } from "../Components/Spacer";

import styled from "styled-components";
const LinkP = styled(P)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;
const Bacteria = () => {
  const isResponsive = useMediaQuery({ query: "(max-width: 487px)" });
  const router = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [mount, setMount] = useState(false);
  let [page, setPage] = useState(1);
  const [dropdown, setDropDown] = useState("");
  const [data, setData] = useState<any>();
  const [count, setCount] = useState(0);
  const [_DATA, set_DATA] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const PER_PAGE = 10;

  function currentData(currentPage: any, itemsPerPage: any = PER_PAGE) {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function jump(page: any) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, count));
  }
  const GettingData = async () => {
    const res = await fetch("http://localhost:5000/links_data", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const dataMain = await res.json();

    if (dataMain.message === "done") {
      setData(dataMain.data);
      // console.log("Data is ", data?data);
      const temp1 = Math.ceil(data?.length / PER_PAGE);
      temp1 ? setCount(temp1) : null;
      console.log("Data is ", +data?.length);
      setMount(true);
    } else {
      setMount(false);
    }
  };

  useEffect(() => {
    async function loadData() {
      await GettingData();
    }
    loadData();
    return () => {};
  }, [mount]);
  const handleChange = (e: any, p: any) => {
    setPage(p);
    jump(p);
  };

  return mount && count ? (
    <>
      {/* <Wrapper className="d-flex flex-row justify-content-center align-items-center mt-5">
        <Wrapper
          className="d-flex flex-row position-relative "
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            height: "40px",
            width: isResponsive ? "350px" : "530px",
          }}
        >
          <Dropdown style={{}} className="d-inline-block">
            <Dropdown.Toggle variant="standard">
              Select Options&nbsp;&nbsp;&nbsp;&nbsp;
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">AMPs Name</Dropdown.Item>
              <Dropdown.Item href="#">GI No</Dropdown.Item>
              <Dropdown.Item href="#">Accession No</Dropdown.Item>
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
      </Wrapper> */}

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
        <Wrapper className="ms-4">
          <P weight="500" color="#012761">
            Page {page} to {PER_PAGE} of {count}
          </P>
          {currentData(currentPage).map((val: any, index: any) => {
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
                      <LinkP
                        weight="700"
                        size="20px"
                        className="mb-1"
                        color="#012761"
                        onClick={() => {
                          router(`/bacteria/${index + page * PER_PAGE - 9}`, {
                            state: val.data,
                          });
                        }}
                      >
                        {/* antimicrobial peptides [Oryza sativa Japonica Group] */}
                        {val.headline}
                      </LinkP>
                      <P weight="500" className="mb-0">
                        {/* 392 aa protein */}
                        {val.subInfo}
                      </P>
                      <P size="12px" className="mb-1">
                        {/* Accession: XP_015615526.1 GI: 1002304331 */}
                        {val.ref}
                      </P>
                      <Wrapper className="d-flex flex-row">
                        <LinkP className="mb-0" td="underline" size="12px">
                          {/* BioProject */}
                          {val.link1}
                        </LinkP>
                        <LinkP className="ms-3 mb-0" td="underline" size="12px">
                          {/* Nucleotide */}
                          {val.link2}
                        </LinkP>
                        <LinkP className="ms-3 mb-0" td="underline" size="12px">
                          {/* Taxonomy */}
                          {val.link3}
                        </LinkP>
                      </Wrapper>
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
    <>Hello</>
  );
};

export default Bacteria;
