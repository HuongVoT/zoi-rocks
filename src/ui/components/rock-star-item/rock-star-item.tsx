import { Image } from "antd";
import { RockStar } from "../../containers";
import {
  StyledRockStarItemWrapper,
  StyledRankBadge,
} from "./rock-star-item.style";

interface RockStarItemProps {
  rockStar: RockStar;
  rank: number;
}

export function RockStarItem({ rockStar, rank }: RockStarItemProps) {
  return (
    <StyledRockStarItemWrapper>
      <StyledRankBadge count={rank} offset={[-40, 40]}>
        <Image src={rockStar.avatar} width={44} preview={false} />
      </StyledRankBadge>
      <span className="rock-star-info">{rockStar.name}</span>
      <span className="rock-star-info">{rockStar.kudosCount}</span>
    </StyledRockStarItemWrapper>
  );
}
