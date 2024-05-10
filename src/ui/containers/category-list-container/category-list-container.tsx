import { Tooltip } from "antd";

import {
  StyledCategory,
  StyledCategories,
  StyledTooltipContainer,
  StyledPlusDiv,
} from "./category-list-container.style";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../../hooks";

interface CategoryListContainerProps {
  categories: string[];
}

export const CategoryListContainer = ({
  categories,
}: CategoryListContainerProps) => {
  const [lastIndex, setLastIndex] = useState<number>(categories.length + 1);
  const [windowWidth] = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      if ((windowWidth * 43) / 100 < containerRef.current.scrollWidth) {
        setLastIndex((prevIndex) => prevIndex - 1);
      } else {
        setLastIndex((prevIndex) => prevIndex + 1);
      }
    }
  }, [windowWidth]);

  return (
    <StyledCategories ref={containerRef}>
      {categories.slice(0, lastIndex).map((category, index) => (
        <StyledCategory key={index}>{category}</StyledCategory>
      ))}
      {categories.slice(lastIndex).length > 0 && (
        <Tooltip
          title={
            <StyledTooltipContainer>
              {categories.slice(lastIndex).map((category, index) => (
                <StyledCategory key={index}>{category}</StyledCategory>
              ))}
            </StyledTooltipContainer>
          }
          placement="topRight"
          arrow={false}
          color="#fff"
        >
          <StyledPlusDiv>{`+${categories.slice(lastIndex).length}`}</StyledPlusDiv>
        </Tooltip>
      )}
    </StyledCategories>
  );
};
