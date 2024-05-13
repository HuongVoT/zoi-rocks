import styled from "styled-components";
import { Divider, List, Skeleton } from "antd";

export const StyledKudosList = styled(List)`
  padding: 1rem 0;
`;

export const StyledKudosListContainer = styled.div`
  height: 90%;
  margin-bottom: 4%;
  margin-top: 2%;
  border-radius: var(--radius-border);
  overflow: auto;
`;

export const StyledEmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15rem;
  height: 100%;
`;

export const StyledSkeleton = styled(Skeleton)`
  padding-bottom: 50px;
`;

export const StyledDivider = styled(Divider)`
  padding-bottom: 40px;
  margin: 0;
`;
