import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { Image } from "./Image";
import { P } from "./Typography";
import { useMediaQuery } from "react-responsive";
import { Select, Button } from "../Components/Buttons";
import { SearchInput } from "../Components/Inputs";
interface WrapperProps {
  size?: string;
  color?: string;
  width?: string;
  height?: string;
  bg?: string;
  borderRadius?: string;
  border?: string;
  ms?: string;
  me?: string;
  mt?: string;
  mb?: string;
  family?: string;
}
const Wrapper = styled.div<WrapperProps>`
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  border: ${(props) => (props.border ? props.border : "")};
  margin-left: ${(props) => (props.ms ? props.ms : "")};
  margin-right: ${(props) => (props.me ? props.me : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  font-family: ${(props) => (props.family ? props.family : "")};
`;
const SpanWrapper = styled.span<WrapperProps>`
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  margin-left: ${(props) => (props.ms ? props.ms : "")};
  margin-right: ${(props) => (props.me ? props.me : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
`;
const LinkP = styled(P)`
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
`;
interface CardCompProps {
  name: string;
  src: string;
}
const CardComp = (props: CardCompProps) => {
  return (
    <Wrapper
      width="200px"
      height="100px"
      color="#012761"
      border="1px solid black"
      borderRadius="10px"
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ cursor: "pointer" }}
    >
      <P weight="700">{props.name}</P>
      <Image src={props.src} alt="Submit" width={75} height={55} />
    </Wrapper>
  );
};
const SearchBar = () => {
  const isResponsive = useMediaQuery({ query: "(max-width: 487px)" });
  return (
    <>
      <Wrapper className="d-flex flex-row align-items-center justify-content-center">
        <Select
          style={{ width: isResponsive ? "20%" : "auto" }}
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
        <SearchInput
          width={isResponsive ? "200px" : "500px"}
          className={isResponsive ? "ms-1 me-1" : "ms-3 me-3"}
        />
        <Button
          className={isResponsive ? "ms-0 me-0" : ""}
          ps={isResponsive ? "10px" : "25px"}
          pe={isResponsive ? "10px" : "25px"}
          fontSize={isResponsive ? "16px" : "21px"}
        >
          Search
        </Button>
      </Wrapper>
    </>
  );
};
export {
  Row,
  Col,
  Container,
  Wrapper,
  SpanWrapper,
  CardComp,
  SearchBar,
  LinkP,
};
