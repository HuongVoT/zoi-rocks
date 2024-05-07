import styled from "styled-components";

export const StyledOpenKudosFormContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 400px;
  overflow: "hidden";

  .ant-drawer-content-wrapper {
    box-shadow: none;
    width: 470px !important;
  }

  .ant-drawer-content-wrapper .ant-drawer-header {
    background-color: var(--primary-color);
    color: var(--primary-dark-color);
    text-align: center;
  }

  .ant-drawer-content-wrapper .ant-drawer-title {
    font-size: 20px;
    font-weight: 700;
  }

  .ant-drawer-content-wrapper .ant-drawer-footer {
    padding: 16px;
    border-top: 1px solid var(--primary-dark-color);
  }
`;
