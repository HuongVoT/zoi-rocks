import { Tooltip } from "antd";

import {
  StyledCategory,
  StyledCategoriesContainer,
  StyledTooltipContainer,
  OverrideAntdTooltip,
  StyledPlusDiv,
} from "./category-list.style";

interface CategoryListProps {
  categories: string[];
}

export const CategoryList = ({ categories }: CategoryListProps) => {
  if (categories.length < 5) {
    return (
      <StyledCategoriesContainer>
        {categories.map((category, index) => (
          <StyledCategory key={index}>{category}</StyledCategory>
        ))}
      </StyledCategoriesContainer>
    );
  } else if (categories.length > 4) {
    return (
      <StyledCategoriesContainer>
        {categories.slice(0, 4).map((category, index) => (
          <StyledCategory key={index}>{category}</StyledCategory>
        ))}
        <Tooltip
          title={
            <StyledTooltipContainer>
              {categories.slice(4).map((category, index) => (
                <StyledCategory key={index}>{category}</StyledCategory>
              ))}
            </StyledTooltipContainer>
          }
          placement="topRight"
          arrow={false}
          color="#fff"
        >
          <OverrideAntdTooltip />
          <StyledPlusDiv>{`+${categories.slice(4).length}`}</StyledPlusDiv>
        </Tooltip>
      </StyledCategoriesContainer>
    );
  }
};
