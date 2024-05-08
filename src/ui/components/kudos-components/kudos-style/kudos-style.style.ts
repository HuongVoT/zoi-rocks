import styled from "styled-components";
import { Typography, TreeSelect, Select } from "antd";

export const StyledText = styled(Typography.Text)`
  font-size: 16px;
  color: #0a324e;
`;

export const StyledTreeSelect = styled(TreeSelect)`
  width: 210px;
  height: 40px;
  border-radius: 10px;
  .ant-select-selection-placeholder {
    font-size: 12px;
  }
  .ant-select-selector {
    border-color: var(--primary-dark-color) !important;
    box-shadow: none !important;
  }
`;

export const StyledSelect = styled(Select)`
  width: 210px;
  height: 40px;
  border-radius: 10px;
  .ant-select-selection-placeholder {
    font-size: 12px;
  }
  .ant-select-selector {
    border-color: var(--primary-dark-color) !important;
    box-shadow: none !important;
  }
`;

export const KudosWhoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 -10px;
`;

export const KudosWhyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;
`;

export const KudosContentWrapper = styled.div`
  margin: 20px -10px 0 -10px;
`;
