import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
interface WrapperProps {
  size?: string;
  color?: string;
  width?: string;
  height?: string;
  bg?: string;
  borderRadius?: string;
  border?: string;
}
const Wrapper = styled.div<WrapperProps>`
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  borer: ${(props) => (props.border ? props.border : "")};
`;
const SpanWrapper = styled.span<WrapperProps>`
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  borer: ${(props) => (props.border ? props.border : "")};
`;
export { Row, Col, Container, Wrapper, SpanWrapper };
