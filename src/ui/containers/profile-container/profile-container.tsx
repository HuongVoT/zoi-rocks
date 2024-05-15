import { useState } from "react";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { signOut } from "aws-amplify/auth";
import {
  StyledUserMiniProfile,
  StyledUserMiniProfileFooter,
} from "../../components/header/header.style";

export function ProfileContainer() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const content = (
    <div>
      <p>Name</p>
      <p>Email</p>
      <p>Receives</p>
      <p>Sends</p>
      <StyledUserMiniProfileFooter />
      <Button onClick={() => signOut()}>LOGOUT</Button>
    </div>
  );

  return (
    <StyledUserMiniProfile
      content={content}
      title=""
      trigger="click"
      placement="bottomRight"
      open={open}
      onOpenChange={handleOpenChange}
      overlayInnerStyle={{ backgroundColor: "var(--primary-color)" }}
    >
      <Avatar size={50} icon={<UserOutlined />} />
    </StyledUserMiniProfile>
  );
}
