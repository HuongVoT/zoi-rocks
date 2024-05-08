import { StyledText, TreeSelect, KudosWhyWrapper } from "../kudos-style";

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
        { title: "Learnability", value: "willingness-to-learn " },
        { title: "Adaptability", value: "willingness-to-change" },
      ],
    },
    {
      title: "Entrepreneurship and capacity utilization",
      value: "entrepreneurship-and-capacity-utilization",
      checkable: false,
      children: [
        {
          title: "Business mindset",
          value: "entrepreneurial-thinking-and-acting ",
        },
        {
          title: "Proactivity and Risk-taking",
          value: "initiative-and-willingness-to-take-risks ",
        },
        {
          title: "Working style",
          value: "working-style",
        },
      ],
    },
    {
      title: "Customer and market orientation",
      value: "customer-and-market-orientation",
      checkable: false,
      children: [
        {
          title: "Customer focus",
          value: "customer-orientation-and-enthusiasm",
        },
        { title: "Market focus", value: "market-orientation" },
      ],
    },
    {
      title: "Social and leadership competence",
      value: "social-and-leadership-competence",
      checkable: false,
      children: [
        {
          title: "Communication skills",
          value: "contact-and-expression-skills",
        },
        {
          title: "Trustworthiness and Understanding",
          value: "credibility-and-empathy ",
        },
        {
          title: "Managing conflicts",
          value: "dealing-with-contradictions",
        },
        {
          title: "Collaborative communication",
          value: "communication-and-collaboration",
        },
      ],
    },
  ];
  return (
    <KudosWhyWrapper>
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
    </KudosWhyWrapper>
  );
}
