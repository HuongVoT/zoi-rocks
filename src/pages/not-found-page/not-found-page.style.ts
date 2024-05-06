import styled from "styled-components";

export const StyledNotFoundPage = styled.div`
  text-align: center;
  margin: 30vh 0 0 30vw;

  h1 {
    font-weight: bold;
    font-size: 42px;
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
