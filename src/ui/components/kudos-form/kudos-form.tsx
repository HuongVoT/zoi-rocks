import { Form } from "antd";
import { KudosWho, KudosWhy } from "../kudos-components";

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
    </Form>
  );
}
