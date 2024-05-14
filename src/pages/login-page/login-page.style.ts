import { Button } from "antd";
import styled from "styled-components";

export const StyledAppContainer = styled.div`
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: var(--primary-color);
`;

export const StyledHeader = styled.div`
  margin-top: 100px;
  margin-bottom: 2rem;
`;

export const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  img {
    width: 210px;
    height: 100px;
    margin-right: 10px;
  }
  h3 {
    color: var(--primary-dark-color);
    text-transform: uppercase;
    font-weight: 800;
    font-size: 80px;
  }
`;

export const StyledSubtitle = styled.h2`
  margin-top: 50px;
  font-weight: 800;
`;

export const StyledLoginButton = styled(Button)`
  width: 240px;
  height: 45px;
  margin-top: 15px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.type === "primary" ? "var(--primary-color)" : "#fff"};
  color: var(--primary-dark-color);
  font-weight: 800;
  text-transform: uppercase;
  font-size: 20px;
  padding: 3px 10px;
  border: 2px solid var(--primary-dark-color);
  &:hover {
    background-color: ${(props) =>
      props.type === "primary" ? "var(--primary-color)" : "fff"} !important;
    color: var(--primary-dark-color) !important;
    opacity: 0.9;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;
