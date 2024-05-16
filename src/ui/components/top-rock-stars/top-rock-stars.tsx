import { TopRockStarsWrapper } from "./top-rock-stars.style";
import { TopRockStarColumn } from "../top-rock-star-column";
import { RockStar } from "../../containers";

interface TopRockStarsProps {
  topRockStars: RockStar[];
  userRank: number;
}

export function TopRockStars({ topRockStars, userRank }: TopRockStarsProps) {
  return (
    <TopRockStarsWrapper>
      <TopRockStarColumn
        userRank={userRank}
        rank={2}
        rockStarInfo={topRockStars[1]}
      />
      <TopRockStarColumn
        userRank={userRank}
        rank={1}
        rockStarInfo={topRockStars[0]}
      />
      <TopRockStarColumn
        userRank={userRank}
        rank={3}
        rockStarInfo={topRockStars[2]}
      />
    </TopRockStarsWrapper>
  );
}
