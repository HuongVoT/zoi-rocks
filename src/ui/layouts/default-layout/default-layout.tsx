import { Header, Sidebar } from "../../components";
import { OpenKudosFormContainer } from "../../containers";
import {
  StyledBody,
  StyledContent,
  StyledDefaultLayout,
} from "./default-layout.style";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <StyledDefaultLayout>
      <Sidebar />
      <StyledContent>
        <Header />
        <StyledBody>
          <Outlet />
        </StyledBody>
      </StyledContent>
      <OpenKudosFormContainer />
    </StyledDefaultLayout>
  );
}
