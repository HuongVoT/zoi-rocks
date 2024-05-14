import { Popover } from "antd";
import { Header } from "antd/es/layout/layout";
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

export const StyledUserMiniProfile = styled(Popover)`
  position: absolute;
  top: 24px;
  right: 24px;
  height: min-content;
  overlayinnerstyle: {
    background-color: var(--primary-color);
  }
  .ant-popover-inner-content {
    background-color: var(--primary-color) !important;
    height: 180px;
    width: 200px;
    padding: 0;
  }
`;

export const StyledUserMiniProfileFooter = styled.div`
  height: 30px;
  background-color: var(--primary-color);
`;
