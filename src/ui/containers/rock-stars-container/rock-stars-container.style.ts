import styled from "styled-components";

export const StyledRockStarContainer = styled.div`
  padding: 16px 0;

  h1 {
    text-align: center;
    font-weight: 800;
    font-size: 32px;
  }

  h4 {
    text-align: center;
    margin-bottom: 16px;
  }

  .ant-select-selector {
    border-color: var(--primary-dark-color) !important;
    width: 200px !important;
    height: 40px !important;
  }

  .ant-select-single {
    height: unset;
  }
`;

export const LeaderBoardContainer = styled.div`
  width: 576px;
  margin: 0 auto;
`;

export const StyledEmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
