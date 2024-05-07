import { KudosFormFooter } from "../../components";
import {
  StyledKudosFormModal,
  StyledKudosFormWrapper,
} from "./kudos-form-container.style";

export function KudosFormContainer({
  handleCloseDrawer,
  open,
}: {
  handleCloseDrawer: () => void;
  open: boolean;
}) {
  return (
    <StyledKudosFormWrapper>
      <StyledKudosFormModal
        title="Let's share your appreciation!"
        footer={<KudosFormFooter handleCloseDrawer={handleCloseDrawer} />}
        closable={false}
        //   onClose={handleCloseDrawer}
        open={open}
        getContainer={false}
        mask={false}
      />
    </StyledKudosFormWrapper>
  );
}
