import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
interface SelectProps {
  ps?: string;
  pe?: string;
  fontSize?: string;
}
const Button = styled.div<SelectProps>`
  background: #012761;
  color: white;
  padding-left: ${(props) => (props.ps ? props.ps : "25px")};
  padding-right: ${(props) => (props.pe ? props.pe : "25px")};
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "21px")};
  border-radius: 15px;
  cursor: pointer;
`;

const Select = styled.select<SelectProps>`
  background: white;
  color: black;
  padding-left: ${(props) => (props.ps ? props.ps : "25px")};
  padding-right: ${(props) => (props.pe ? props.pe : "25px")};
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "21px")};
  border-radius: 10px;
`;
export { Button, Select };
