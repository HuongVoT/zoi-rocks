import { CloseOutlined } from "@ant-design/icons";
import { Button, Row } from "antd";
import styled from "styled-components";

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-right: 20px;
`;

export const StyledData = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: var(--primary-color);
  padding: 5px 10px;
  font-size: 14px;
  text-align: center;
`;

export const DeleteButton = styled(Button)`
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const StyledFilterDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StyledCloseOutlined = styled(CloseOutlined)`
  svg {
    font-size: 13px;
    cursor: pointer;
    margin-left: 5px;
  }
`;
