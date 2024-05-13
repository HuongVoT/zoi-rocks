import {
  OptionContainer,
  OptionDetails,
  StyledDateFilter,
  StyledFilterModal,
  StyledFilterRadio,
  StyledForm,
  StyledRadioGroup,
  StyledSelect,
  StyledTreeSelect,
} from "./kudos-filter-modal.style";
import { KudosFilterFooter } from "../kudos-filter-footer";
import dayjs from "dayjs";
import { Form, FormInstance, TimeRangePickerProps, Image } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux";
import _ from "lodash";
import { ActionStatus, IMAGE_FAULT_TOLERANT } from "../../../../utils";

const categories = [
  {
    title: "Professional and methodical competence",
    value: "Professional and methodical competence",
    checkable: false,
    selectable: false,
    children: [
      { title: "Professional", value: "Professional" },
      { title: "Well organized", value: "Well organized" },
    ],
  },
  {
    title: "Willingness to change and innovation",
    value: "Willingness to change and innovation",
    checkable: false,
    selectable: false,
    children: [
      { title: "Eager to learn", value: "Eager to learn" },
      { title: "Flexible", value: "Flexible" },
    ],
  },
  {
    title: "Entrepreneurship and capacity utilization",
    value: "Entrepreneurship and capacity utilization",
    checkable: false,
    selectable: false,
    children: [
      {
        title: "Role model",
        value: "Role model",
      },
      {
        title: "Adventurous",
        value: "Adventurous",
      },
    ],
  },
  {
    title: "Customer and market orientation",
    value: "Customer and market orientation",
    checkable: false,
    selectable: false,
    children: [
      {
        title: "Customer centric",
        value: "Customer centric",
      },
      { title: "Market oriented", value: "Market oriented" },
    ],
  },
  {
    title: "Social and leadership competence",
    value: "Social and leadership competence",
    checkable: false,
    selectable: false,
    children: [
      {
        title: "Enthusiastic",
        value: "Enthusiastic",
      },
      {
        title: "Reliable",
        value: "Reliable",
      },
    ],
  },
];

export interface SelectOptionProps {
  label: string;
  email: string;
  value: string;
  image: string | JSX.Element;
}

const rangePresets: TimeRangePickerProps["presets"] = [
  { label: "Last Month", value: [dayjs().add(-1, "month"), dayjs()] },
  { label: "Last Quarter", value: [dayjs().add(-3, "month"), dayjs()] },
  { label: "Last Year", value: [dayjs().add(-1, "year"), dayjs()] },
];

export function KudosFilterModal({
  form,
  handleCancel,
  handleSubmit,
  // handleResetListUser,
  open,
  currentFilterType,
  setCurrentFilterType,
  options,
  setReceiverEmail,
  setSenderEmail,
}: {
  form: FormInstance;
  handleCancel: () => void;
  // handleResetListUser: () => void;
  handleSubmit: () => void;
  open: boolean;
  currentFilterType: string;
  setCurrentFilterType: React.Dispatch<React.SetStateAction<string>>;
  options: SelectOptionProps[];
  setReceiverEmail: React.Dispatch<React.SetStateAction<string>>;
  setSenderEmail: React.Dispatch<React.SetStateAction<string>>;
}) {
  const inputSearchReceiverEmail = _.debounce((value: string) => {
    setReceiverEmail(value);
  }, 500);

  const inputSearchSenderEmail = _.debounce((value: string) => {
    setSenderEmail(value);
  }, 500);

  const listUsersStatus = useSelector(
    (state: RootState) => state.user.listUsersStatus,
  );

  const isLoading = listUsersStatus === ActionStatus.PENDING;

  const isLoadingReceiver = isLoading && currentFilterType === "receiver";
  const isLoadingSender = isLoading && currentFilterType === "sender";

  return (
    <StyledFilterModal
      open={open}
      title="Kudos Album Filter Utility"
      footer={
        <KudosFilterFooter
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
        />
      }
      closable={false}
      width="fit-content"
    >
      <StyledRadioGroup
        value={currentFilterType}
        onChange={(e) => setCurrentFilterType(e.target.value)}
      >
        <StyledForm form={form} onFinish={handleSubmit} layout="horizontal">
          <StyledFilterRadio value="date" />
          <Form.Item name="date">
            <StyledDateFilter
              allowEmpty
              presets={rangePresets}
              disabled={currentFilterType !== "date"}
            />
          </Form.Item>

          <StyledFilterRadio value="category" />
          <Form.Item name="category">
            <StyledTreeSelect
              dropdownStyle={{
                maxHeight: 300,
                width: 500,
                overflow: "auto",
                position: "fixed",
              }}
              treeData={categories}
              placeholder="Choose Category"
              treeDefaultExpandAll
              disabled={currentFilterType !== "category"}
            />
          </Form.Item>

          <StyledFilterRadio value="receiver" />
          <Form.Item name="receiver">
            <StyledSelect
              dropdownStyle={{
                maxHeight: 300,
                width: 400,
                overflow: "auto",
              }}
              showSearch
              options={options}
              disabled={currentFilterType !== "receiver"}
              placeholder="Choose Receiver"
              loading={isLoadingReceiver}
              onSearch={inputSearchReceiverEmail}
              // onBlur={() => {
              //   handleResetListUser();
              // }}
              optionRender={(option) => (
                <OptionContainer>
                  <Image
                    width={35}
                    src={option.data.image}
                    preview={false}
                    fallback={IMAGE_FAULT_TOLERANT}
                  />
                  <OptionDetails>
                    <span>{option.data.label}</span>
                    <span>{option.data.email}</span>
                  </OptionDetails>
                </OptionContainer>
              )}
              filterOption={false}
              notFoundContent="No Person Found!"
            />
          </Form.Item>

          <StyledFilterRadio value="sender" />
          <Form.Item name="sender">
            <StyledSelect
              dropdownStyle={{
                maxHeight: 300,
                width: 400,
                overflow: "auto",
              }}
              dropdownAlign={{ points: ["tr", "br"] }}
              showSearch
              options={options}
              onSearch={inputSearchSenderEmail}
              // onBlur={() => {
              //   handleResetListUser();
              // }}
              disabled={currentFilterType !== "sender"}
              placeholder="Choose Sender"
              loading={isLoadingSender}
              optionFilterProp="children"
              optionRender={(option) => (
                <OptionContainer>
                  <Image
                    width={35}
                    src={option.data.image}
                    preview={false}
                    fallback={IMAGE_FAULT_TOLERANT}
                  />
                  <OptionDetails>
                    <span>{option.data.label}</span>
                    <span>{option.data.email}</span>
                  </OptionDetails>
                </OptionContainer>
              )}
              filterOption={false}
            />
          </Form.Item>
        </StyledForm>
      </StyledRadioGroup>
    </StyledFilterModal>
  );
}
