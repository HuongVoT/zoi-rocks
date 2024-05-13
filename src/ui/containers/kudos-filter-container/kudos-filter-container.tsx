import { KudosFilterButton } from "../../components/kudos-filter/kudos-filter-button";
import { useEffect, useState } from "react";
import {
  KudosFilterModal,
  SelectOptionProps,
} from "../../components/kudos-filter/kudos-filter-modal";
import {
  StyledCloseOutlined,
  StyledData,
  StyledFilterDisplay,
  StyledRow,
} from "./kudos-filter-container.style";
import { Avatar, Form } from "antd";
import dayjs from "dayjs";
import { FilterFormProps } from "../kudos-list-container";
import { useAppDispatch, useAppSelector, userAction } from "../../../redux";
import { DefaultParams } from "../../../utils";
import { UserOutlined } from "@ant-design/icons";

interface FilterModalContainerProps {
  setSubmittedDataFilter: (props: FilterFormProps) => void;
  submittedDataFilter: FilterFormProps;
}

type FilterForm = Omit<FilterFormProps, "startDate" | "endDate"> & {
  date: dayjs.Dayjs[];
};

export function FilterModalContainer({
  submittedDataFilter,
  setSubmittedDataFilter,
}: FilterModalContainerProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [currentFilterType, setCurrentFilterType] = useState("");
  const [submittedFilterType, setSubmittedFilterType] = useState("");
  const options: SelectOptionProps[] = [];
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();

  const listUsers = useAppSelector((state) => state.user.users);

  const [form] = Form.useForm<FilterForm>();

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    form.resetFields(
      ["date", "category", "receiver", "sender"].filter(
        (field) => field !== currentFilterType,
      ),
    );
    const values = form.getFieldsValue();
    const filterInput = {
      startDate: "",
      endDate: "",
      category: "",
      receiver: "",
      sender: "",
    };

    for (const [key, value] of Object.entries(values)) {
      if (key === "date" && value) {
        filterInput.startDate = new Date(value[0].toString()).toISOString();
        filterInput.endDate = new Date(value[1].toString()).toISOString();
      }

      if (value && key !== "date") {
        filterInput[key as keyof typeof filterInput] = value.toString();
      }
    }

    setSubmittedDataFilter(filterInput);
    setSubmittedFilterType(currentFilterType);
    setOpen(false);
  };

  const clearDataFilter = () => {
    setSubmittedDataFilter({
      startDate: "",
      endDate: "",
      category: "",
      receiver: "",
      sender: "",
    });
    setCurrentFilterType("");
    setSubmittedFilterType("");
    form.resetFields();
  };

  const getReceiverOrSenderName = () =>
    listUsers.find(
      (user) =>
        user.id === submittedDataFilter.sender ||
        user.id === submittedDataFilter.receiver,
    );

  listUsers.forEach((user) => {
    options.push({
      label: user.firstName + " " + user.lastName,
      email: user.email,
      value: user.id,
      image: user.image || <Avatar icon={<UserOutlined />} />,
    });
  });

  useEffect(() => {
    dispatch(
      userAction.listUsers({
        limit: DefaultParams.LIST_USERS_LIMIT,
        email: email,
      }),
    );
  }, [dispatch, email]);

  return (
    <>
      <StyledRow>
        <StyledFilterDisplay>
          {submittedFilterType === "date" &&
            submittedDataFilter.startDate &&
            submittedDataFilter.endDate && (
              <StyledData>
                Period:{" "}
                {dayjs(submittedDataFilter.startDate).format("DD/MM/YYYY")} -{" "}
                {dayjs(submittedDataFilter.endDate).format("DD/MM/YYYY")}
                <StyledCloseOutlined onClick={clearDataFilter} />
              </StyledData>
            )}
          {submittedFilterType === "category" &&
            submittedDataFilter.category && (
              <StyledData>
                Category: {submittedDataFilter.category}
                <StyledCloseOutlined onClick={clearDataFilter} />
              </StyledData>
            )}
          {submittedFilterType === "receiver" &&
            submittedDataFilter.receiver && (
              <StyledData>
                Receiver: {getReceiverOrSenderName()?.firstName}{" "}
                {getReceiverOrSenderName()?.lastName}
                <StyledCloseOutlined onClick={clearDataFilter} />
              </StyledData>
            )}
          {submittedFilterType === "sender" && submittedDataFilter.sender && (
            <StyledData>
              Sender: {getReceiverOrSenderName()?.firstName}{" "}
              {getReceiverOrSenderName()?.lastName}
              <StyledCloseOutlined onClick={clearDataFilter} />
            </StyledData>
          )}
        </StyledFilterDisplay>
        <KudosFilterButton handleShowModal={showModal} />
      </StyledRow>
      <KudosFilterModal
        form={form}
        open={open}
        handleCancel={handleCancel}
        currentFilterType={currentFilterType}
        setCurrentFilterType={setCurrentFilterType}
        handleSubmit={handleSubmit}
        options={options}
        setEmail={setEmail}
      />
    </>
  );
}
