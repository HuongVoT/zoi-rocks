import { ExclamationCircleFilled } from "@ant-design/icons";
import { StyledErrorIcon, StyledErrorPage } from "./error-page.style";

export function ErrorPage() {
  return (
    <StyledErrorPage>
      <StyledErrorIcon>
        <ExclamationCircleFilled />
      </StyledErrorIcon>
      <h1>Something went wrong!</h1>
      <p>
        Come back to <a href="/kudos-album">home page</a>
      </p>
    </StyledErrorPage>
  );
}
