import styled from "styled-components";

export const StyledColumnWrapper = styled.div`
  width: 180px;

  .top-rock-star-avatar {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
    position: relative;
  }
`;

export const StyledTopRockstarColumn = styled.div<{
  $rank: number;
  userRank: number;
}>`
  padding: 30px 10px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${(props) => 160 - (props.$rank - 1) * 25}px;
  border: 1px solid var(--primary-dark-color);
  border-top-right-radius: ${(props) =>
    props.$rank === 2 ? 0 : "var(--radius-border)"};
  border-top-left-radius: ${(props) =>
    props.$rank === 3 ? 0 : "var(--radius-border)"};
  border-right-color: ${(props) =>
    props.$rank === 2 ? "transparent" : "var(--primary-dark-color)"};
  border-left-color: ${(props) =>
    props.$rank === 3 ? "transparent" : "var(--primary-dark-color)"};
  border-bottom-color: transparent;

  ${(props) =>
    props.$rank === props.userRank &&
    `
    box-shadow: 0 0 4px 4px var(--primary-color);
    border-color: transparent;
    `}

  span {
    font-size: ${(props) => (props.$rank === 1 ? 22 : 18)}px;
    font-weight: ${(props) => (props.$rank === 1 ? 700 : 500)};
    margin-bottom: 10px;
    text-align: center;
  }
`;

export const StyledBadgeWrapper = styled.div<{ $rank: number }>`
  position: absolute;
  z-index: 999;
  top: ${(props) => 60 - (props.$rank - 1) * 14}px;

  span {
    position: absolute;
    top: 71%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: ${(props) => (props.$rank === 1 ? 14 : 11)}px;
  }
`;
