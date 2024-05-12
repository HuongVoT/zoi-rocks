import styled from "styled-components";
import { FloatButton } from "antd";

export const StyledGiveKudosButton = styled(FloatButton)`
  .ant-float-btn-body {
    background-color: var(--primary-color);
    box-shadow: 2px 4px 4px 0px #00000040;
  }

  .ant-float-btn-body:hover {
    background-color: var(--primary-color);
  }

  .ant-float-btn-content {
    padding-left: 0px !important;
    padding-right: 5px !important;
    padding-top: 5px !important;
    width: 35px;
  }

  .ant-float-btn-icon {
    img {
      width: 25px;
    }
  }
`;
