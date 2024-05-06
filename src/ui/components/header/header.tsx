import { UserOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import {
  StyledHeaderLayout,
  StyledPageName,
  StyledUserAvatar,
} from "./header.style";

export function HeaderLayout() {
  // const pathName = window.location.search;
  const location = useLocation();
  const pathname = location.pathname;
  const pageName = pathname.replace(/\/|-/g, " ");

  return (
    <StyledHeaderLayout>
      <StyledPageName>{pageName}</StyledPageName>
      <StyledUserAvatar to="user">
        <UserOutlined />
      </StyledUserAvatar>
    </StyledHeaderLayout>
  );
}
