import { ReactNode } from "react";
import { HeaderLayout, SidebarLayout } from "../../components";
import {
  StyledBody,
  StyledContent,
  StyledLayout,
} from "./default-layout.style";

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <StyledLayout>
      <SidebarLayout />
      <StyledContent>
        <HeaderLayout />
        <StyledBody>{props.children}</StyledBody>
      </StyledContent>
    </StyledLayout>
  );
}
