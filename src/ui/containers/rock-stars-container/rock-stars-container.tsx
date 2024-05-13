import {
  LeaderBoardContainer,
  StyledEmptyContainer,
  StyledRockStarContainer,
} from "./rock-stars-container.style";
import { RockStarList, TopRockStars } from "../../components";
import { useAppDispatch, useAppSelector } from "../../../redux";
import { useEffect, useState } from "react";
import { leaderboardAction } from "../../../redux";
import { Select, Spin } from "antd";
import { ActionStatus } from "../../../utils";

export interface RockStar {
  id: string;
  name: string;
  avatar: string;
  kudosCount: number;
}

enum FilterBy {
  RECEIVES = "receives",
  SENDS = "sends",
}

export function RockStarsContainer() {
  const [filterBy, setFilterBy] = useState<FilterBy>(FilterBy.RECEIVES);
  const rockStars = useAppSelector((state) => state.leaderboard.users).map(
    (rockstar) => {
      return {
        id: rockstar.id,
        name: `${rockstar.firstName} ${rockstar.lastName}`,
        avatar: rockstar.image || "https://avatar.iran.liara.run/public",
        kudosCount:
          filterBy === FilterBy.RECEIVES
            ? rockstar.totalReceives
            : rockstar.totalSends,
      };
    },
  );
  const leaderBoardStatus = useAppSelector(
    (state) => state.leaderboard.leaderboardStatus,
  );

  const dispatch = useAppDispatch();

  const handleFilterChange = (filter: FilterBy) => {
    setFilterBy(filter);
  };

  useEffect(() => {
    dispatch(
      leaderboardAction.getLeadeboardRockstars({
        sortBy: filterBy,
      }),
    );
  }, [dispatch, filterBy]);

  const top3RockStars = rockStars.slice(0, 3);
  const remainingRockStars = rockStars.slice(3);
  return (
    <StyledRockStarContainer>
      <Select
        dropdownStyle={{
          maxHeight: 300,
          overflow: "auto",
          position: "fixed",
          border: "1px solid var(--primary-dark-color)",
        }}
        defaultValue={FilterBy.RECEIVES}
        options={[
          { value: FilterBy.RECEIVES, label: "Receivers" },
          { value: FilterBy.SENDS, label: "Senders" },
        ]}
        onSelect={handleFilterChange}
      />
      <h1>ROCK STARS</h1>
      <h4>
        {filterBy === FilterBy.RECEIVES
          ? "who are loved by everyone"
          : "who like sharing joy"}
      </h4>
      {leaderBoardStatus === ActionStatus.PENDING ? (
        <StyledEmptyContainer>
          <Spin size="large" />
        </StyledEmptyContainer>
      ) : (
        <LeaderBoardContainer>
          {top3RockStars && <TopRockStars topRockStars={top3RockStars} />}
          <RockStarList rockStars={remainingRockStars} />
        </LeaderBoardContainer>
      )}
    </StyledRockStarContainer>
  );
}
