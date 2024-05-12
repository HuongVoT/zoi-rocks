import { Button, Form } from "antd";
import { SelectOptionProps, KudosFormSubmitData } from "../../containers";
import { KudosWho, KudosWhy, KudosContent } from "../kudos-components";
import { StyledKudosFormWrapper } from "./kudos-form.style";
import { ActionStatus } from "../../../utils";

interface KudosFormProps {
  handleCloseModal: () => void;
  options: SelectOptionProps[];
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSendKudos: (values: KudosFormSubmitData) => void;
  createKudosStatus: string;
}

export function KudosForm({
  handleCloseModal,
  handleSendKudos,
  options,
  setEmail,
  createKudosStatus,
}: KudosFormProps) {
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
            loading={createKudosStatus === ActionStatus.PENDING}
          >
            Send
          </Button>
        </div>
      </Form>
    </StyledKudosFormWrapper>
  );
}
