import { Button } from "antd";
import styled from "styled-components";

export const StyledKudosFormFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledKudosFooterButton = styled(Button)`
  width: 90px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.type === "primary" ? "var(--primary-color)" : "#fff"};
  color: var(--primary-dark-color);
  font-weight: 800;
  text-transform: uppercase;
  padding: 4px 10px;

  &:hover {
    background-color: ${(props) =>
      props.type === "primary" ? "var(--primary-color)" : "fff"} !important;
    color: var(--primary-dark-color) !important;
    opacity: 0.9;
  }
`;
