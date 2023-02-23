import styled from "styled-components";
const H1 = styled.h1``;
const H2 = styled.h2``;
const H3 = styled.h3``;
interface PProps {
  color?: string;
  size?: string;
  lHeight?: string;
  weight?: string;
  tt?: string;
}
const P = styled.p<PProps>`
  font-style: normal;
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "24px")};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  color: ${(props) => (props.color ? props.color : "")};
`;
export { H1, H2, H3, P };
