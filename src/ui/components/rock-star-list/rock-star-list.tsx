import { List } from "antd";
import { RockStar } from "../../containers";
import { RockStarItem } from "../rock-star-item";
import { StyledRockStarListWrapper } from "./rock-star-list.style";

interface RockStarListProps {
  rockStars: RockStar[];
}

export function RockStarList({ rockStars }: RockStarListProps) {
  return (
    <StyledRockStarListWrapper>
      <List
        bordered
        dataSource={rockStars}
        renderItem={(item) => {
          return (
            <List.Item>
              <RockStarItem
                rockStar={item}
                rank={rockStars.indexOf(item) + 4}
              />
            </List.Item>
          );
        }}
      />
    </StyledRockStarListWrapper>
  );
}
