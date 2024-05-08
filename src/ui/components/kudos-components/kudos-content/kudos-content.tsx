import { StyledText, KudosContentWrapper } from "../kudos-style";
import { Input } from "antd";

const { TextArea } = Input;

export function KudosContent() {
  return (
    <KudosContentWrapper>
      <StyledText>
        How fascinating! Please tell us more.{" "}
        <StyledText type="danger">*</StyledText>
      </StyledText>
      <TextArea
        showCount
        maxLength={255}
        style={{
          fontSize: 12,
          height: 100,
          resize: "none",
        }}
        placeholder="Tell us more about this person."
      />
    </KudosContentWrapper>
  );
}
