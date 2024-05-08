import { useState } from "react";
import { StyledOpenKudosFormContainer } from "./open-kudos-form-container.style";
import { KudosFormButton } from "../../components/kudos-form-button";
import { KudosFormContainer } from "../kudos-form-container";

export function OpenKudosFormContainer() {
  const [open, setOpen] = useState(false);

  const handleShowDrawer = () => {
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };
  return (
    <StyledOpenKudosFormContainer>
      <KudosFormButton handleShowDrawer={handleShowDrawer} />
      <KudosFormContainer handleCloseDrawer={handleCloseDrawer} open={open} />
    </StyledOpenKudosFormContainer>
  );
}
