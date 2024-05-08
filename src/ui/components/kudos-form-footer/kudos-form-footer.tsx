import {
  StyledKudosFooterButton,
  StyledKudosFormFooterWrapper,
} from "./kudos-form-footer.style";

export function KudosFormFooter({
  handleCloseDrawer,
}: {
  handleCloseDrawer: () => void;
}) {
  return (
    <StyledKudosFormFooterWrapper>
      <StyledKudosFooterButton size="large" onClick={handleCloseDrawer}>
        Cancel
      </StyledKudosFooterButton>
      <StyledKudosFooterButton size="large" type="primary">
        Send
      </StyledKudosFooterButton>
    </StyledKudosFormFooterWrapper>
  );
}
