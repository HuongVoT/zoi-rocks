import { StyledText, TreeSelect } from "../kudos-style";

export function KudosWhy() {
  const categories = [
    {
      title: "Professional and methodical competence",
      value: "professional-and-methodical",
      checkable: false,
      children: [
        { title: "Professional", value: "professional" },
        { title: "Well organized", value: "well-organized" },
      ],
    },
    {
      title: "Willingness to change and innovation",
      value: "willingness-to-change-and-innovation",
      checkable: false,
      children: [
        { title: "Innovative", value: "innovative" },
        { title: "Open to change", value: "open-to-change" },
      ],
    },
    {
      title: "Entrepreneurship and capacity utilization",
      value: "entrepreneurship-and-capacity-utilization",
      checkable: false,
      children: [
        { title: "Entrepreneurial", value: "entrepreneurial" },
        { title: "Efficient", value: "efficient" },
      ],
    },
    {
      title: "Customer and market orientation",
      value: "customer-and-market-orientation",
      checkable: false,
      children: [
        { title: "Customer oriented", value: "customer-oriented" },
        { title: "Market oriented", value: "market-oriented" },
      ],
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 0 0 20px",
      }}
    >
      <StyledText>
        Why is that? <StyledText type="danger">*</StyledText>
      </StyledText>
      <TreeSelect
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
    </div>
  );
}
