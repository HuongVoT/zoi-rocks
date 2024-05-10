import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled(Header)`
  line-height: var(--header-height);
  width: 80vw;
  height: var(--header-height);
  background-color: transparent;
`;

export const StyledPageName = styled.h2`
  text-transform: uppercase;
  font-weight: 800;
  color: var(--primary-dark-color);
  line-height: var(--header-height);
`;

export const StyledUserAvatar = styled(Link)`
  position: absolute;
  top: 10px;
  right: 30px;
  color: #000;
`;
