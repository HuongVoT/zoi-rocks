import { CloseOutlined } from "@ant-design/icons";
import { StyledButton } from "./rock-stars-button.style";
export function RockStarsClearButton({
  resetFilters,
}: {
  resetFilters: () => void;
}) {
  return (
    <StyledButton type="primary" onClick={resetFilters}>
      Clear
      <CloseOutlined />
    </StyledButton>
  );
}
