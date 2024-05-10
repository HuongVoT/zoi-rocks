import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useLocation } from "react-router-dom";
import { StyledHeader, StyledPageName, StyledUserAvatar } from "./header.style";

export function Header() {
  const location = useLocation();
  const pathName = location.pathname;
  const pageName = pathName.replace(/\/|-/g, " ");

  return (
    <StyledHeader>
      <StyledPageName>{pageName}</StyledPageName>
      <StyledUserAvatar to="user">
        <Avatar size={50} icon={<UserOutlined />} />
      </StyledUserAvatar>
    </StyledHeader>
  );
}
