import styled from "styled-components";
import { Modal } from "antd";

export const StyledKudosFormWrapper = styled.div`
  .ant-modal-wrap {
    pointer-events: none;
  }
`;

export const StyledKudosFormModal = styled(Modal)`
  position: absolute;
  top: unset;
  bottom: 24px;
  right: 24px;
  height: min-content;

  .ant-modal-content {
    padding: 0;
    border-radius: var(--radius-border);
    border: 1px solid black;
  }

  .ant-modal-header {
    background-color: var(--primary-color);
    padding: 20px 24px;
    text-align: center;
    border-top-left-radius: var(--radius-border);
    border-top-right-radius: var(--radius-border);
  }

  .ant-modal-header .ant-modal-title {
    font-size: 20px;
    font-weight: 700;
  }

  .ant-modal-footer {
    padding: 10px 24px;
    background-color: #f5f5f5;
    border-bottom-left-radius: var(--radius-border);
    border-bottom-right-radius: var(--radius-border);
  }
`;
