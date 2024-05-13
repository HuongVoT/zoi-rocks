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
    font-size: 13px;
  }
`;

export const StyledSelect = styled(Select)`
  width: 210px;
  height: 40px;
  border-radius: 10px;
  .ant-select-selection-placeholder {
    font-size: 13px;
  }
`;

export const KudosContentWrapper = styled.div`
  margin-top: 14px;

  .ant-input-outlined {
    border-color: var(--primary-dark-color);
  }

  textarea {
    font-size: 13px !important;
    height: 100px !important;
    resize: none;
    box-shadow: none;
    font-family: inherit;
  }
`;
