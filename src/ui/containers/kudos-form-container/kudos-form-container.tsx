import { KudosFormFooter } from "../../components";
import { KudosForm } from "../../components/kudos-form";
import { StyledKudosFormContainer } from "./kudos-form-container.style";

export function KudosFormContainer({
  handleCloseDrawer,
  open,
}: {
  handleCloseDrawer: () => void;
  open: boolean;
}) {
  return (
    <StyledKudosFormContainer
      title="Let's share your appreciation!"
      footer={<KudosFormFooter handleCloseDrawer={handleCloseDrawer} />}
      placement="right"
      closable={false}
      onClose={handleCloseDrawer}
      open={open}
      getContainer={false}
      mask={false}
    >
      <KudosForm />
    </StyledKudosFormContainer>
  );
}
