import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
const LinksData = [
  {
    headline: "antimicrobial peptides [Oryza sativa Japonica Group]",
    subInfo: " 392 aa protein",
    ref: " Accession: XP_015615526.1 GI: 1002304331",
    link1: "Physicochemical properties",
    link2: "FASTA",
    link3: "Structure",
    data: `LOCUS       XP_015615526             392 aa            linear   PLN 07-AUG-2018
    DEFINITION  antimicrobial peptides [Oryza sativa Japonica Group].
    ACCESSION   XP_015615526
    VERSION     XP_015615526.1
    DBLINK      BioProject: PRJNA122
    DBSOURCE    REFSEQ: accession XM_015760040.2
    KEYWORDS    RefSeq.
    SOURCE      Oryza sativa Japonica Group (Japanese rice)
      ORGANISM  Oryza sativa Japonica Group
                Eukaryota; Viridiplantae; Streptophyta; Embryophyta; Tracheophyta;
                Spermatophyta; Magnoliopsida; Liliopsida; Poales; Poaceae; BOP
                clade; Oryzoideae; Oryzeae; Oryzinae; Oryza; Oryza sativa.
    COMMENT     MODEL REFSEQ:  This record is predicted by automated computational
                analysis. This record is derived from a genomic sequence
                (NC_029266.1) annotated using gene prediction method: Gnomon,
                supported by mRNA and EST evidence.
                Also see:
                    Documentation of NCBI's Annotation Process
                
                ##Genome-Annotation-Data-START##
                Annotation Provider         :: NCBI
                Annotation Status           :: Full annotation
                Annotation Name             :: Oryza sativa Japonica Group
                                               Annotation Release 102
                Annotation Version          :: 102
                Annotation Pipeline         :: NCBI eukaryotic genome annotation
                                               pipeline
                Annotation Software Version :: 8.1
                Annotation Method           :: Best-placed RefSeq; Gnomon
                Features Annotated          :: Gene; mRNA; CDS; ncRNA
                ##Genome-Annotation-Data-END##
                COMPLETENESS: full length.
    FEATURES             Location/Qualifiers
         source          1..392
                         /organism="Oryza sativa Japonica Group"
                         /cultivar="Nipponbare"
                         /db_xref="taxon:39947"
                         /chromosome="11"
         Protein         1..392
                         /product="antimicrobial peptides"
                         /calculated_mol_wt=47254
         Region          164..193
                         /region_name="Antimicrobial21"
                         /note="Plant antimicrobial peptide; pfam14861"
                         /db_xref="CDD:405540"
         Region          209..238
                         /region_name="Antimicrobial21"
                         /note="Plant antimicrobial peptide; pfam14861"
                         /db_xref="CDD:405540"
         Region          251..280
                         /region_name="Antimicrobial21"
                         /note="Plant antimicrobial peptide; pfam14861"
                         /db_xref="CDD:405540"
         Region          300..329
                         /region_name="Antimicrobial21"
                         /note="Plant antimicrobial peptide; pfam14861"
                         /db_xref="CDD:405540"
         CDS             1..392
                         /gene="LOC4350789"
                         /coded_by="XM_015760040.2:88..1266"
                         /db_xref="GeneID:4350789"
    ORIGIN      
            1 mgvkwkggga llllaaglll vavaaaaaee egrrdpkeel rwckkqcrwe agqdqrqlre
           61 ceeqclqrqq edddddenth ggggkecrre crgyrdepwr kqecmrqcew rrheqhhhgg
          121 ghggsrpdcr eqcehqqdww ekqrclmdcr hrrqevdadd dnhhgrdpcy kqcrhhhdqw
          181 kkqqcmeecr yhqrqqdaav dvdeeddnhg gdrcrkqcqh hhdqwkkqqc iqdcryhhrq
          241 eddvveeedg hgdqqcrkqc qhhhdqwkkq qcmqdcrqwr rqeeeeaavd eeedhnygge
          301 reqhcrkrcq hhhdqwkrqq cmqdcryrrq eeddvvdddn hhggggghgg dhcrrqcqhh
          361 rewherqrcm rdcherrhgw atvaaeailq a`,
  },
];
const Bacteria = () => {
  const isResponsive = useMediaQuery({ query: "(max-width: 487px)" });
  const router = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [mount, setMount] = useState(false);
  let [page, setPage] = useState(1);
  const [dropdown, setDropDown] = useState("");
  const PER_PAGE = 10;
  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);
  const GettingData = async () => {
    const res = await fetch("http://localhost:5000/links_data", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.message === "done") {
      setMount(true);
      console.log("This is data ", data.data);
    } else {
      console.log("Here is no data ");
    }
  };

  useEffect(() => {
    async function loadData() {
      await GettingData();
    }
    loadData();
    return () => {
      setMount(true);
    };
  }, [location]);
  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA?.jump(p);
  };

  return mount && data && count && _DATA ? (
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
                      <LinkP
                        weight="700"
                        size="20px"
                        className="mb-1"
                        color="#012761"
                        onClick={() => {
                          router(`/bacteria/${index + page * PER_PAGE - 9}`, {
                            state: LinksData[0].data,
                          });
                        }}
                      >
                        {/* antimicrobial peptides [Oryza sativa Japonica Group] */}
                        {LinksData[0].headline}
                      </LinkP>
                      <P weight="500" className="mb-0">
                        {/* 392 aa protein */}
                        {LinksData[0].subInfo}
                      </P>
                      <P size="12px" className="mb-1">
                        {/* Accession: XP_015615526.1 GI: 1002304331 */}
                        {LinksData[0].ref}
                      </P>
                      <Wrapper className="d-flex flex-row">
                        <LinkP className="mb-0" td="underline" size="12px">
                          {/* BioProject */}
                          {LinksData[0].link1}
                        </LinkP>
                        <LinkP className="ms-3 mb-0" td="underline" size="12px">
                          {/* Nucleotide */}
                          {LinksData[0].link2}
                        </LinkP>
                        <LinkP className="ms-3 mb-0" td="underline" size="12px">
                          {/* Taxonomy */}
                          {LinksData[0].link3}
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
    <></>
  );
};

export default Bacteria;
