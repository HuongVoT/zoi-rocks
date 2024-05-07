import styled from "styled-components";

export const StyledErrorPage = styled.div`
  width: 100vw;
  text-align: center;
  h1 {
    font-size: 36px;
    font-weight: bold;
    color: var(--primary-color);
    text-transform: uppercase;
  }
  p {
    line-height: 36px;
    color: #000;
    a {
      color: var(--primary-color);
    }
  }
`;

export const StyledErrorIcon = styled.span`
  color: #ff2525;
  font-size: 42px;
`;
