import { List } from "antd";
import { RockStar } from "../../containers";
import { RockStarItem } from "../rock-star-item";
import { StyledRockStarListWrapper } from "./rock-star-list.style";

interface RockStarListProps {
  rockStars: RockStar[];
  userRank: number;
  isInTopTen: boolean;
}

export function RockStarList({
  rockStars,
  userRank,
  isInTopTen,
}: RockStarListProps) {
  return (
    <StyledRockStarListWrapper userRank={userRank} isInTopTen={isInTopTen}>
      <List
        bordered
        dataSource={rockStars}
        renderItem={(item) => {
          return (
            <List.Item>
              <RockStarItem
                rockStar={item}
                userRank={rockStars.indexOf(item) + 4}
              />
            </List.Item>
          );
        }}
      />
    </StyledRockStarListWrapper>
  );
}
