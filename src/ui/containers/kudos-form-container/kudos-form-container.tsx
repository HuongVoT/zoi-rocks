import { UserOutlined } from "@ant-design/icons";
import { Avatar, notification } from "antd";
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
  image: string | JSX.Element;
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

  const dispatch = useAppDispatch();
  const listUsers = useAppSelector((state: RootState) => state.user.users);
  const kudosState = useAppSelector((state) => state.kudos);

  const options: SelectOptionProps[] = [];

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
      userAction.listUsers({ limit: DefaultParams.LIMIT, email: email }),
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
        destroyOnClose={true}
        footer={null}
      >
        <KudosForm
          setEmail={setEmail}
          options={options}
          handleCloseModal={handleCloseModal}
          handleSendKudos={handleSendKudos}
        />
      </StyledKudosFormModal>
    </StyledKudosFormWrapper>
  );
}
