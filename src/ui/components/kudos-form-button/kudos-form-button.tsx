import { MessageOutlined } from "@ant-design/icons";
import { StyledKudosFormButton } from "./kudos-form-button.style";

export function KudosFormButton({
  handleShowDrawer,
}: {
  handleShowDrawer: () => void;
}) {
  return (
    <>
      <StyledKudosFormButton
        icon={<MessageOutlined />}
        type="primary"
        onClick={handleShowDrawer}
      />
    </>
  );
}
