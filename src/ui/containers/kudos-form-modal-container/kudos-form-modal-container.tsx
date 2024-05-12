import { useState } from "react";
import { StyledKudosFormModalContainer } from "./kudos-form-modal-container.style";
import { GiveKudosButton } from "../../components/give-kudos-button";
import { KudosFormContainer } from "../kudos-form-container";

export function KudosFormModalContainer() {
  const [open, setOpen] = useState(false);

  const handleShowModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <StyledKudosFormModalContainer>
      <GiveKudosButton handleShowModal={handleShowModal} />
      <KudosFormContainer handleCloseModal={handleCloseModal} open={open} />
    </StyledKudosFormModalContainer>
  );
}
