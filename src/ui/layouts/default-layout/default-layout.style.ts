import { Layout } from "antd";
import styled from "styled-components";

export const StyledDefaultLayout = styled(Layout)`
  position: fixed;
  inset: 0;
  overflow: hidden;
  background-color: #d9d9d9;
`;

export const StyledContent = styled(Layout.Content)`
  width: 80vw;
  height: 100vh;
`;

export const StyledBody = styled.div`
  height: 87vh;
  overflow: hidden;
  padding: 0 1rem;
  margin-left: 25px;
  margin-right: 100px;
  border-radius: var(--radius-border);
  background-color: #fff;
  color: var(--primary-dark-color);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
`;
