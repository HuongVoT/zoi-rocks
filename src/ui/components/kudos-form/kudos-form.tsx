import { Button, Form } from "antd";
import { SelectOptionProps, KudosFormSubmitData } from "../../containers";
import { KudosWho, KudosWhy, KudosContent } from "../kudos-components";
import { StyledKudosFormWrapper } from "./kudos-form.style";
import { useAppSelector } from "../../../redux";
import { ActionStatus } from "../../../utils";

interface KudosFormProps {
  handleCloseModal: () => void;
  options: SelectOptionProps[];
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSendKudos: (values: KudosFormSubmitData) => void;
}

export function KudosForm({
  handleCloseModal,
  handleSendKudos,
  options,
  setEmail,
}: KudosFormProps) {
  const kudosState = useAppSelector((state) => state.kudos);

  return (
    <StyledKudosFormWrapper>
      <Form layout="vertical" onFinish={handleSendKudos}>
        <div className="kudos-input-wrapper">
          <div className="kudos-same-line-input">
            <KudosWho options={options} setEmail={setEmail} />
            <KudosWhy />
          </div>
          <KudosContent />
        </div>
        <div className="kudos-form-action">
          <Button size="large" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            loading={kudosState.createKudosStatus === ActionStatus.PENDING}
          >
            Send
          </Button>
        </div>
      </Form>
    </StyledKudosFormWrapper>
  );
}
