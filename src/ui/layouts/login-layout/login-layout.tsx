import { Outlet } from "react-router-dom";
import {
  StyledBody,
  StyledContent,
  StyledHeader,
  StyledLoginLayout,
} from "./login-layout.style";

export function LoginLayout() {
  return (
    <StyledLoginLayout>
      <StyledContent>
        <StyledHeader />
        <StyledBody>
          <Outlet />
        </StyledBody>
      </StyledContent>
    </StyledLoginLayout>
  );
}
