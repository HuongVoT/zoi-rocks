import { Layout } from "antd";
import styled from "styled-components";

export const StyledLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const StyledContent = styled(Layout.Content)`
  width: 80vw;
  height: 100vh;
`;

export const StyledBody = styled.div`
  margin-top: var(--header-height);
  width: 80vw;
`;
