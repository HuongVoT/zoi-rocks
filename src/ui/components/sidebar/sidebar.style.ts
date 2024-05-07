import Sider from "antd/es/layout/Sider";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledSider = styled(Sider)`
  width: 20vw;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: var(--primary-color) !important;
  .ant-menu-item {
    border-radius: var(--radius-border);
  }

  .ant-menu-item-selected {
    background-color: var(--primary-dark-color) !important;
    a {
      color: #fff !important;
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
  img {
    height: 46px;
  }
  span {
    height: 30px;
    align-self: center;
    color: var(--primary-dark-color);
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 800;
  }
`;

export const MenuStyle: React.CSSProperties = {
  backgroundColor: "var(--primary-color)",
  marginTop: "30px",
  textTransform: "uppercase",
  textAlign: "center",
  fontSize: "18px",
};

export const SelectionStyle: React.CSSProperties = {
  fontWeight: "bold",
  color: "var(--primary-dark-color)",
};
