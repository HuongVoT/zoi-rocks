// import React, { useState } from "react";
import { Avatar, Button } from "antd";
import {
  StyledUserMiniProfile,
  StyledUserMiniProfileFooter,
} from "../../components/header/header.style";
import { UserOutlined } from "@ant-design/icons";

export function ProfileContainer() {
  //   const [open, setOpen] = useState(false);

  //   const hide = () => {
  //     setOpen(false);
  //   };

  //   const handleOpenChange = (newOpen: boolean) => {
  //     setOpen(newOpen);
  //   };

  const content = (
    <div>
      <p>Name User</p>
      <p>emailuser</p>
      <p>Recognition received</p>
      <p>Recognition given</p>
      <StyledUserMiniProfileFooter />
      <Button>LOGOUT</Button>
    </div>
  );

  return (
    <StyledUserMiniProfile
      content={content}
      title=""
      trigger="click"
      placement="bottomRight"
      open={true}
      //   onOpenChange={handleOpenChange}
      overlayInnerStyle={{ backgroundColor: "var(--primary-color)" }}
    >
      <Avatar size={50} icon={<UserOutlined />} />
    </StyledUserMiniProfile>
  );
}
