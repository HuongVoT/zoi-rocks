import { Button } from "antd";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  margin-top: 15px;
  width: 95px;
  height: 40px;
  border-radius: 15px;
  background-color: ${(props) =>
    props.type === "primary" ? "var(--primary-color)" : "#fff"};
  color: var(--primary-dark-color);
  font-weight: 800;
  text-transform: uppercase;
  padding: 4px 10px;
  margin-right: -14px;

  &:hover {
    background-color: ${(props) =>
      props.type === "primary" ? "var(--primary-color)" : "fff"} !important;
    color: var(--primary-dark-color) !important;
    opacity: 0.9;
  }
  &:last-child {
    margin-left: 15px;
  }
  svg {
    margin-left: -3px;
  }
`;
