import styled from "styled-components";

export const StyledKudosFormWrapper = styled.div`
  .kudos-input-wrapper {
    padding: 20px 14px;
  }

  .kudos-same-line-input {
    display: flex;
    justify-content: space-between;

    .ant-form-item {
      width: 47%;
    }
  }

  .kudos-form-action {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--primary-dark-color);
    padding: 16px 12px;
  }

  .ant-form-item-required::before {
    display: none !important;
  }

  .ant-form-item-required::after {
    display: inline-block;
    margin-inline-end: 4px !important;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: "*" !important;
    visibility: visible !important;
  }

  .ant-form-item-label > label {
    font-size: 16px;
    font-weight: 600;
  }

  .ant-select-selector {
    border-color: var(--primary-dark-color) !important;
    box-shadow: none !important;
  }

  .ant-select-status-error .ant-select-selector {
    border-color: #ff4d4f !important;
  }

  .ant-btn-default,
  .ant-btn-primary {
    width: 90px;
    border-radius: 15px;
    font-weight: 800;
    text-transform: uppercase;
    padding: 4px 10px;
    border: 1px solid var(--primary-dark-color);
    color: var(--primary-dark-color);
  }

  .ant-btn-primary,
  .ant-btn-primary:hover {
    background-color: var(--primary-color) !important;
    color: var(--primary-dark-color) !important;
  }

  .ant-btn-primary:hover {
    opacity: 0.9;
  }

  .ant-btn-default:hover {
    background-color: #fff !important;
    color: var(--primary-dark-color) !important;
    border-color: var(--primary-dark-color) !important;
  }
`;
