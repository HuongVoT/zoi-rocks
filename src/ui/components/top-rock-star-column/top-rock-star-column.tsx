import { RockStar } from "../../containers";
import { Image } from "antd";
import {
  StyledTopRockstarColumn,
  StyledColumnWrapper,
  StyledBadgeWrapper,
} from "./top-rock-star-column.style";
import top1badge from "./../../../assets/top1badge.png";
import top2badge from "./../../../assets/top2badge.png";
import top3badge from "./../../../assets/top3badge.png";

interface TopRockStarColumnProps {
  rank: 1 | 2 | 3;
  rockStarInfo: RockStar;
}

export function TopRockStarColumn({
  rank = 1,
  rockStarInfo = { id: "", avatar: "", name: "", kudosCount: 0 },
}: TopRockStarColumnProps) {
  const badgeImgSrc =
    rank === 1 ? top1badge : rank === 2 ? top2badge : top3badge;
  return (
    <StyledColumnWrapper>
      <div className="top-rock-star-avatar">
        <StyledBadgeWrapper $rank={rank}>
          <Image
            src={badgeImgSrc}
            width={160 - (rank - 1) * 20}
            preview={false}
          />
          <span>No. {rank}</span>
        </StyledBadgeWrapper>
        <Image
          src={rockStarInfo.avatar}
          alt={rockStarInfo.name}
          width={100 - (rank - 1) * 20}
          preview={false}
        />
      </div>
      <StyledTopRockstarColumn $rank={rank}>
        <span>{rockStarInfo.name}</span>
        <span>{rockStarInfo.kudosCount}</span>
      </StyledTopRockstarColumn>
    </StyledColumnWrapper>
  );
}
