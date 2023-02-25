import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { Image } from "./Image";
import { P } from "./Typography";
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
export { Row, Col, Container, Wrapper, SpanWrapper, CardComp };
