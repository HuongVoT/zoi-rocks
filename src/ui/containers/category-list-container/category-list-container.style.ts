import styled from "styled-components";

export const StyledCategory = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  border: 1px solid var(--primary-color);
  border-radius: var(--radius-border);
  color: var(--primary-dark-color);
  white-space: nowrap;
  width: fit-content;
  padding: 0 0.4rem;
`;

export const StyledCategories = styled.div`
  display: flex;
  width: fit-content;
  gap: 10px;
  overflow: hidden;
  margin: 0.2rem 0;
`;

export const StyledTooltipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  overflow: hidden;
  max-height: 3rem;
`;

export const StyledPlusDiv = styled.div`
  display: flex;
  justify-content: center;
  color: var(--primary-dark-color);
  border: 1px solid var(--primary-color);
  border-radius: var(--radius-border);
  font-size: 0.8rem;
  width: 1.4rem;
  user-select: none;
`;
