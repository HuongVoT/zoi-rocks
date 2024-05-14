import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";

export const StyledLoginLayout = styled(Layout)`
  position: fixed;
  inset: 0;
  background-color: #d9d9d9;
`;

export const StyledContent = styled(Layout.Content)`
  width: 80vw;
  height: 100vh;
`;

export const StyledBody = styled.div`
  height: 80vh;
  overflow: hidden;
  margin-left: 130px;
  margin-right: 130px;
  border-radius: var(--radius-border);
  background-color: #fff;
  color: var(--primary-dark-color);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const StyledHeader = styled(Header)`
  line-height: var(--header-height);
  width: 80vw;
  height: var(--header-height);
  background-color: transparent;
`;
