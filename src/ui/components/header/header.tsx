import { useLocation } from "react-router-dom";
import { StyledHeader, StyledPageName } from "./header.style";
import { ProfileContainer } from "../../containers/profile-container/profile-container";

export function Header() {
  const location = useLocation();
  const pathName = location.pathname;
  const pageName = pathName.replace(/\/|-/g, " ");
  return (
    <StyledHeader>
      <StyledPageName>{pageName}</StyledPageName>
      <ProfileContainer />
    </StyledHeader>
  );
}
