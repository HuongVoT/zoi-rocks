import { FilterOutlined } from "@ant-design/icons";

import { StyledButton } from "./kudos-filter-button.style";

export function KudosFilterButton({
  handleShowModal,
}: {
  handleShowModal: () => void;
}) {
  return (
    <StyledButton type="primary" onClick={handleShowModal}>
      Filter
      <FilterOutlined />
    </StyledButton>
  );
}
