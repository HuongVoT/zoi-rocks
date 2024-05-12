import {
  DatePicker,
  Form,
  Modal,
  Radio,
  Select,
  Space,
  TreeSelect,
} from "antd";
import styled from "styled-components";

export const StyledFilterModal = styled(Modal)`
  .ant-modal-content {
    padding: 0px;
    margin-left: 250px;
    margin-top: 50px;
    border-radius: 20px 20px 20px 20px;
    .ant-modal-header {
      border-bottom: 1px solid #ddd;
      background-color: var(--primary-color);
      width: 100%;
      height: 60px;
      border-radius: 20px 20px 0 0;
    }
    .ant-modal-footer {
      border-top: 1px solid #ddd;
      background-color: #fff;
      width: 100%;
      height: 68px;
      border-radius: 0 0 20px 20px;
    }
    .ant-modal-title {
      color: black;
      font-size: 18px;
      font-weight: bold;
      margin: 0;
      margin-left: 20px;
      padding-top: 20px;
    }
  }
`;

export const StyledRadioGroup = styled(Radio.Group)`
  margin-right: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const StyledFilterRadio = styled(Radio)`
  align-items: center;
  margin-right: 5px;
  margin-left: 15px;
  cursor: pointer;

  .ant-radio-inner {
    width: 18px;
    height: 18px;
    position: relative;
    top: 3px;
    border-radius: 50px;
    border: 2px solid var(--primary-color);
    background-color: #ffffff;

    &::before {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: var(--primary-color);
      opacity: 0;
    }

    &::after {
      background-color: var(--primary-color);
    }
  }

  &:hover .ant-radio-inner {
    border-color: var(--primary-color);
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: var(--primary-color);
    background-color: #ffffff;

    &::before {
      opacity: 1;
    }
  }

  &.ant-radio-disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: baseline;

  .ant-form-item {
    width: 180px;
    height: 40px;

    &:nth-child(2) {
      width: auto;
    }
  }
`;

export const StyledSpace = styled(Space)`
  size: 12px;
  width: 400%;
  direction: vertical;
`;

export const StyledTreeSelect = styled(TreeSelect)`
  width: 180px;
  height: 40px;
  border-radius: 10px;
  .ant-select-selection-placeholder {
    font-size: 12px;
  }
  .ant-select-selector {
    align-items: center !important;
  }
  .ant-select-selection-placeholder {
    font-size: 14px;
  }
  .ant-select-selector {
    &:hover {
      border-color: var(--primary-color) !important;
    }
  }
`;

const { RangePicker } = DatePicker;

export const StyledDateFilter = styled(RangePicker)`
  width: auto;
  height: 40px;
  &:hover {
    border-color: var(--primary-color) !important;
  }

  .ant-picker-focused {
    border-color: var(--primary-color) !important;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    border-color: var(--primary-color);
  }
`;

export const OptionDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const StyledSelect = styled(Select)`
  width: 180px;
  height: 40px;
  .ant-select-selection-placeholder {
    font-size: 14px;
  }
  .ant-select-selector {
    &:hover {
      border-color: var(--primary-color) !important;
    }
  }

  &.custom-dropdown-width .ant-select-dropdown {
    width: auto !important;
    min-width: 100%;
  }
`;
