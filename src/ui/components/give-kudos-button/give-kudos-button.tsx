import { StyledGiveKudosButton } from "./give-kudos-button.style";
import WriteFeedBackIcon from "./../../../assets/write-feedback.png";

interface GiveKudosButtonProps {
  handleShowModal: () => void;
}

export function GiveKudosButton({ handleShowModal }: GiveKudosButtonProps) {
  return (
    <>
      <StyledGiveKudosButton
        icon={<img src={WriteFeedBackIcon} />}
        type="primary"
        onClick={handleShowModal}
      />
    </>
  );
}
