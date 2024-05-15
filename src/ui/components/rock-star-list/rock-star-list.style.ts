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
  ${(props) =>
    props.userRank === 4 &&
    `
    .ant-list-item:first-child {
    box-shadow: 0 0 4px 4px var(--primary-color);
    border-top-right-radius: var(--radius-border);
    border-top-left-radius: var(--radius-border);
    }
  `}

  ${(props) =>
    props.userRank === 10 &&
    `
    .ant-list-item:last-child {
      box-shadow: 0 0 4px 4px var(--primary-color);
      border-bottom-right-radius: var(--radius-border);
      border-bottom-left-radius: var(--radius-border);
    }
  `}
  ${(props) =>
    props.isInTopTen &&
    `
    .ant-list-item:nth-child(${props.userRank - 3}) {
      box-shadow: 0 0 4px 4px var(--primary-color);
    }
    `} 
    ${(props) =>
    !props.isInTopTen &&
    props.userRank !== 0 &&
    `
     .ant-list-item:last-child {
    box-shadow: 0 0 4px 4px var(--primary-color);
    border-bottom-right-radius: var(--radius-border);
    border-bottom-left-radius: var(--radius-border);
  } `}
`;
