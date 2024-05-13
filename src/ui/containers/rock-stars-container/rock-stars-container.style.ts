import { Row } from "antd";
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
    width: 130px !important;
    height: 40px !important;
    box-shadow: none !important;
  }

  .ant-select-single {
    height: unset;
  }

  .ant-picker-outlined {
    border-color: var(--primary-dark-color) !important;
    box-shadow: none !important;
  }

  .ant-picker .ant-picker-input > input {
    border-color: var(--primary-dark-color) !important;
    width: 100px !important;
    height: 31px !important;
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

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-right: 20px;
`;
