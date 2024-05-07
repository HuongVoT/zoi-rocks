import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

export const StyledLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
`;

export const StyledContent = styled(Content)`
  width: 80vw;
  height: 100vh;
`;

export const StyledBody = styled.div`
  margin-top: var(--header-height);
  width: 80vw;
  height: calc(100vh - var(--header-height));
`;
