import { Layout } from "antd";
import styled from "styled-components";

export const StyledLayout = styled(Layout)`
  position: fixed;
  inset: 0;
`;

export const StyledContent = styled(Layout.Content)`
  width: 80vw;
  height: 100vh;
`;

export const StyledBody = styled.div`
  margin-top: var(--header-height);
  width: 80vw;
`;
