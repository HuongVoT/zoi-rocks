import { Col } from "antd";
import React from "react";
import styled from "styled-components";

export const StyledHeaderLayout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: var(--header-height);
  line-height: var(--header-height);
  width: 100%;
`;

export const StyledLogoColumn = styled(Col)`
  z-index: 0;
`;

export const StyledPageNameColumn = styled(Col)`
  padding: 20px;
  color: var(--primary-dark-color);
  font-weight: bold;
  font-size: 38px;
  text-transform: uppercase;
`;

export const UserAvatarStyle: React.CSSProperties = {
  color: "#000",
  fontSize: "24px",
};
