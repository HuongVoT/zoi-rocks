import styled, { createGlobalStyle } from "styled-components";

export const StyledCategory = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  width: 8rem;
  border: 1px solid var(--primary-color);
  border-radius: var(--radius-border);
  color: var(--primary-dark-color);
  white-space: nowrap;
`;

export const StyledCategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  overflow: hidden;
`;

export const StyledTooltipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  overflow: hidden;
  border-radius: var(--radius-border);
`;

export const StyledPlusDiv = styled.div`
  display: flex;
  justify-content: center;
  color: var(--primary-dark-color);
  border: 1px solid var(--primary-color);
  border-radius: var(--radius-border);
  font-size: 0.8rem;
  user-select: none;
  width: 1.5rem;
`;

export const OverrideAntdTooltip = createGlobalStyle`
body {
    .ant-tooltip-inner {
        position: relative;
        right: 20rem;
        width: 37rem;
        border-radius: var(--radius-border);
        border: 1px solid var(--primary-dark-color);
    }
  }
`;
