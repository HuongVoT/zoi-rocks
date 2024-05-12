import { KudosContentWrapper } from "../kudos-style";
import { Form, Input } from "antd";

const { TextArea } = Input;

export function KudosContent() {
  return (
    <KudosContentWrapper>
      <Form.Item
        name={["kudos", "description"]}
        label="How fascinating! Please tell us more"
        rules={[
          {
            required: true,
            message: "Please write some thing about this person!",
          },
        ]}
      >
        <TextArea
          showCount
          maxLength={255}
          placeholder="Tell us more about this person."
        />
      </Form.Item>
    </KudosContentWrapper>
  );
}
