import styled from "styled-components";
import { Badge } from "antd";

export const StyledRockStarItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .rock-star-info {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const StyledRankBadge = styled(Badge)`
  .ant-badge-count {
    background-color: #fff;
    border: 3px solid var(--primary-color);
    color: var(--primary-dark-color);
    line-height: 16px;
    min-width: 22px;
    height: 22px;
    border-radius: 50%;
  }

  .ant-badge-multiple-words {
    padding: 0;
  }

  span {
    font-size: 13px !important;
  }
`;

export const StyledBadgeDot = styled.div`
  .ant-badge-status-dot {
    width: 10px !important;
    height: 10px !important;
  }
`;
