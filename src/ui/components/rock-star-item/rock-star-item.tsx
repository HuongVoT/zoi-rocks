import { Badge, Image } from "antd";
import { RockStar } from "../../containers";
import {
  StyledRockStarItemWrapper,
  StyledRankBadge,
  StyledBadgeDot,
} from "./rock-star-item.style";

interface RockStarItemProps {
  rockStar: RockStar;
  userRank: number;
}

export function RockStarItem({ rockStar, userRank }: RockStarItemProps) {
  return rockStar.id ? (
    <StyledRockStarItemWrapper>
      <StyledRankBadge count={userRank} offset={[-40, 40]}>
        <Image src={rockStar.avatar} width={44} preview={false} />
      </StyledRankBadge>
      <span className="rock-star-info">{rockStar.name}</span>
      <span className="rock-star-info">{rockStar.kudosCount}</span>
    </StyledRockStarItemWrapper>
  ) : (
    <StyledBadgeDot
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: 44,
      }}
    >
      <Badge
        dot
        size="small"
        color="var(--primary-color)"
        style={{ marginRight: 5 }}
      />
      <Badge
        dot
        size="small"
        color="var(--primary-color)"
        style={{ marginRight: 5 }}
      />
      <Badge dot size="small" color="var(--primary-color)" />
    </StyledBadgeDot>
  );
}
