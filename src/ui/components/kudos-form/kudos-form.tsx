import { Form } from "antd";
import { KudosWho, KudosWhy, KudosContent } from "../kudos-components";

export function KudosForm() {
  return (
    <Form>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <KudosWho />
        <KudosWhy />
      </div>
      <KudosContent />
    </Form>
  );
}
