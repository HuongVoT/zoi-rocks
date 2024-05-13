import {
  StyledKudosFilterFooterWrapper,
  StyledKudosFooterButton,
} from "./kudos-filter-footer.style";

export function KudosFilterFooter({
  handleCancel,
  handleSubmit,
}: {
  handleCancel: () => void;
  handleSubmit: () => void;
}) {
  return (
    <>
      <StyledKudosFilterFooterWrapper>
        <StyledKudosFooterButton size="large" onClick={handleCancel}>
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
