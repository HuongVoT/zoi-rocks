import {
  StyledKudosFilterFooterWrapper,
  StyledKudosFooterButton,
} from "./kudos-filter-footer.style";

export function KudosFilterFooter({
  handleCloseDrawer,
  handleSubmit,
}: {
  handleCloseDrawer: () => void;
  handleSubmit: () => void;
}) {
  return (
    <>
      <StyledKudosFilterFooterWrapper>
        <StyledKudosFooterButton size="large" onClick={handleCloseDrawer}>
          Cancel
        </StyledKudosFooterButton>
        <StyledKudosFooterButton
          size="large"
          type="primary"
          htmlType="submit"
          onClick={handleSubmit}
        >
          Submit
        </StyledKudosFooterButton>
      </StyledKudosFilterFooterWrapper>
    </>
  );
}
