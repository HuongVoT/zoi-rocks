import { Button } from "antd";
import styled from "styled-components";

export const StyledKudosFilterFooterWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 13px;
  margin-right: 14px;
  margin-bottom: 14px;
`;

export const StyledKudosFooterButton = styled(Button)`
  width: 90px;
  border-radius: 15px;
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
  &:last-child {
    margin-left: 15px;
  }
`;
