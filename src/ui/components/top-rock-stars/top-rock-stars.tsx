import { TopRockStarsWrapper } from "./top-rock-stars.style";
import { TopRockStarColumn } from "../top-rock-star-column";
import { RockStar } from "../../containers";

interface TopRockStarsProps {
  topRockStars: RockStar[];
}

export function TopRockStars({ topRockStars }: TopRockStarsProps) {
  return (
    <TopRockStarsWrapper>
      <TopRockStarColumn rank={2} rockStarInfo={topRockStars[1]} />
      <TopRockStarColumn rank={1} rockStarInfo={topRockStars[0]} />
      <TopRockStarColumn rank={3} rockStarInfo={topRockStars[2]} />
    </TopRockStarsWrapper>
  );
}
