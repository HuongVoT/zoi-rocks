import { List } from "antd";
import styled from "styled-components";

export const StyledRockStarListWrapper = styled(List)`
  .ant-list-bordered {
    border: 1px solid var(--primary-dark-color);
    border-radius: var(--radius-border);
  }

  .ant-list-item {
    border-block-end: 1px solid var(--primary-dark-color);
  }

  .ant-list-item:last-child {
    border-block-end: none;
  }
`;
