import { notification, Form } from "antd";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch, userAction } from "../../../redux";
import { DefaultParams, ActionStatus } from "../../../utils";
import { CreateKudosDTO } from "../../../domain/dtos";
import { KudosForm } from "../../components/kudos-form";
import { kudosAction, useAppSelector, kudosSlice } from "../../../redux";
import {
  StyledKudosFormModal,
  StyledKudosFormWrapper,
} from "./kudos-form-container.style";

export interface SelectOptionProps {
  label: string;
  email: string;
  value: string;
  image: string | null;
}
export interface KudosFormSubmitData {
  kudos: CreateKudosDTO;
}

export function KudosFormContainer({
  handleCloseModal,
  open,
}: {
  handleCloseModal: () => void;
  open: boolean;
}) {
  const [email, setEmail] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();
  const listUsers = useAppSelector((state: RootState) => state.user.users);
  const kudosState = useAppSelector((state) => state.kudos);

  const options: SelectOptionProps[] = [];

  listUsers.forEach((user) => {
    options.push({
      label: user.firstName + " " + user.lastName,
      email: user.email,
      value: user.id,
      image: user.image,
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

  const handleSendKudos = (kudosData: KudosFormSubmitData) => {
    dispatch(
      kudosAction.createKudos({
        ...kudosData.kudos,
        // TODO: Change senderId to the current user id
        senderId: "4e847f32-1188-43d8-9f90-91b6aea63a00",
      }),
    );
  };

  useEffect(() => {
    if (kudosState.createKudosStatus === ActionStatus.SUCCESS) {
      api.success({
        message: "Kudos sent successfully!",
      });
      dispatch(kudosSlice.resetKudos());
      handleCloseModal();
      form.resetFields();
      setEmail("");
    } else if (kudosState.createKudosStatus === ActionStatus.ERROR) {
      api.error({
        message: "Failed to send kudos!",
        description: kudosState.error.message,
      });
      dispatch(kudosSlice.resetKudos());
    }
  }, [
    dispatch,
    api,
    kudosState.createKudosStatus,
    kudosState.error.message,
    handleCloseModal,
    form,
  ]);

  return (
    <StyledKudosFormWrapper>
      {contextHolder}
      <StyledKudosFormModal
        title="LET'S SHARE YOU APPRECIATION!"
        closable={false}
        open={open}
        getContainer={false}
        mask={false}
        footer={null}
      >
        <KudosForm
          form={form}
          setEmail={setEmail}
          options={options}
          handleCloseModal={handleCloseModal}
          handleSendKudos={handleSendKudos}
          createKudosStatus={kudosState.createKudosStatus}
        />
      </StyledKudosFormModal>
    </StyledKudosFormWrapper>
  );
}
