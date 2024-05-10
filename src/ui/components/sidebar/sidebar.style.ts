import Sider from "antd/es/layout/Sider";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledSider = styled(Sider)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: var(--primary-color) !important;
  border-radius: 0 var(--radius-border) var(--radius-border) 0;
  .ant-menu-item {
    border-radius: var(--radius-border);
  }

  .ant-menu-item-selected {
    background-color: var(--primary-dark-color) !important;
    a {
      color: #fff !important;
    }
  }
  .ant-menu-title-content {
    h4 {
      padding-left: 2vw;
    }
  }
`;

export const StyledProductName = styled.div`
  height: var(--header-height);
  line-height: var(--header-height);
  text-align: center;
`;

export const StyledNameWrapper = styled(Link)`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  img {
    height: 3.8vw;
  }
  h3 {
    color: var(--primary-dark-color);
    text-transform: uppercase;
    font-weight: 800;
  }
`;

export const MenuStyle: React.CSSProperties = {
  backgroundColor: "var(--primary-color)",
  marginTop: "30px",
  textTransform: "uppercase",
};

export const SelectionStyle: React.CSSProperties = {
  fontWeight: "bold",
  color: "var(--primary-dark-color)",
};
