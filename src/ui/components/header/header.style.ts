import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeaderLayout = styled(Header)`
  height: var(--header-height);
  line-height: var(--header-height);
  width: 80vw;
  background-color: transparent;
`;

export const StyledPageName = styled.h2`
  text-transform: uppercase;
  font-weight: 800;
  color: var(--primary-dark-color);
  line-height: var(--header-height);
`;

export const StyledUserAvatar = styled(Link)`
  position: fixed;
  top: 0;
  right: 40px;
  font-size: 24px;
  color: #000;
`;
