import styled from "styled-components";
import {
  Typography,
  TreeSelect as AntdTreeSelect,
  Select as AntdSelect,
} from "antd";

export const StyledText = styled(Typography.Text)`
  font-size: 16px;
  color: #0a324e;
`;

export const TreeSelect = styled(AntdTreeSelect)`
  width: 210px;
  height: 40px;
  border-radius: 10px;
  .ant-select-selection-placeholder {
    font-size: 12px;
  }
`;

export const Select = styled(AntdSelect)`
  width: 210px;
  height: 40px;
  border-radius: 10px;
  .ant-select-selection-placeholder {
    font-size: 12px;
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
