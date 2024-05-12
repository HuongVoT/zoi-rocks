import { Form } from "antd";
import { StyledTreeSelect } from "../kudos-style";

const categories = [
  {
    title: "Professional and methodical competence",
    value: "Professional and methodical competence",
    checkable: false,
    children: [
      { title: "Professional", value: "Professional" },
      { title: "Well organized", value: "Well organized" },
    ],
  },
  {
    title: "Willingness to change and innovation",
    value: "Willingness to change and innovation",
    checkable: false,
    children: [
      { title: "Eager to learn", value: "Eager to learn" },
      { title: "Flexible", value: "Flexible" },
    ],
  },
  {
    title: "Entrepreneurship and capacity utilization",
    value: "Entrepreneurship and capacity utilization",
    checkable: false,
    children: [
      {
        title: "Role model",
        value: "Role model",
      },
      {
        title: "Adventurous",
        value: "Adventurous",
      },
    ],
  },
  {
    title: "Customer and market orientation",
    value: "Customer and market orientation",
    checkable: false,
    children: [
      {
        title: "Customer centric",
        value: "Customer centric",
      },
      { title: "Market oriented", value: "Market oriented" },
    ],
  },
  {
    title: "Social and leadership competence",
    value: "Social and leadership competence",
    checkable: false,
    children: [
      {
        title: "Enthusiastic",
        value: "Enthusiastic",
      },
      {
        title: "Reliable",
        value: "Reliable",
      },
    ],
  },
];

export function KudosWhy() {
  return (
    <Form.Item
      name={["kudos", "categories"]}
      label="Why is it?"
      rules={[
        { required: true, message: "Please choose at least one category!" },
      ]}
    >
      <StyledTreeSelect
        dropdownStyle={{
          maxHeight: 300,
          width: 300,
          overflow: "auto",
          position: "fixed",
        }}
        treeData={categories}
        placeholder="Which describes this person?"
        treeCheckable
        allowClear
        treeDefaultExpandAll
        maxTagCount={"responsive"}
        maxTagPlaceholder={"Multiple choices"}
      />
    </Form.Item>
  );
}
