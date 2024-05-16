import {
  LeaderBoardContainer,
  StyledEmptyContainer,
  StyledRockStarContainer,
  StyledRow,
} from "./rock-stars-container.style";
import {
  RockStarList,
  TopRockStars,
  RockStarsClearButton,
} from "../../components";
import { useAppDispatch, useAppSelector } from "../../../redux";
import { useEffect, useState } from "react";
import { leaderboardAction } from "../../../redux";
import { Select, Spin, DatePicker, Space } from "antd";
import type { DatePickerProps } from "antd";
import { Dayjs } from "dayjs";
import { ActionStatus } from "../../../utils";

type PickerType = "month" | "quarter" | "year" | undefined;

export interface RockStar {
  id: string;
  name: string;
  avatar: string;
  kudosCount: number;
  userRank?: number;
}

enum FilterBy {
  RECEIVES = "receives",
  SENDS = "sends",
}

export function RockStarsContainer() {
  const [type, setType] = useState<PickerType>(undefined);
  const [filterBy, setFilterBy] = useState<FilterBy>(FilterBy.RECEIVES);
  const [date, setDate] = useState<Dayjs | null>(null);
  const [period, setPeriod] = useState<string | string[]>("");

  const resetFilters = () => {
    setType(undefined);
    setFilterBy(FilterBy.RECEIVES);
    setDate(null);
    setPeriod("");
  };

  const handleFilterPeriodChange: DatePickerProps["onChange"] = (
    date,
    dateString,
  ) => {
    setDate(date);
    setPeriod(dateString);
  };

  const PickerWithType = ({ type }: { type: PickerType }) => {
    return (
      <DatePicker
        picker={type}
        onChange={handleFilterPeriodChange}
        value={date}
      />
    );
  };

  const currentUser = useAppSelector((state) => state.leaderboard.currentUser);

  const isInTopTen = useAppSelector(
    (state) => state.leaderboard.currentUserRank.isInTopTen,
  );

  const userRank = useAppSelector(
    (state) => state.leaderboard.currentUserRank.userRank,
  );

  const rockStars = useAppSelector(
    (state) => state.leaderboard.topTenUsers,
  ).map((rockstar) => {
    return {
      id: rockstar.id,
      name: rockstar.name,
      avatar: rockstar.image || "https://avatar.iran.liara.run/public",
      kudosCount:
        filterBy === FilterBy.RECEIVES
          ? rockstar.totalReceives
          : rockstar.totalSends,
    };
  }) as RockStar[];

  if (currentUser && !isInTopTen) {
    if (userRank > 11) {
      rockStars.push({} as RockStar);
      rockStars.push({
        id: currentUser.id,
        name: currentUser.name,
        avatar: currentUser.image || "https://avatar.iran.liara.run/public",
        kudosCount:
          filterBy === FilterBy.RECEIVES
            ? currentUser.totalReceives
            : currentUser.totalSends,
        userRank: userRank,
      } as RockStar);
    } else {
      rockStars.push({
        id: currentUser.id,
        name: currentUser.name,
        avatar: currentUser.image || "https://avatar.iran.liara.run/public",
        kudosCount:
          filterBy === FilterBy.RECEIVES
            ? currentUser.totalReceives
            : currentUser.totalSends,
        userRank: userRank,
      } as RockStar);
    }
  }

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
        //TODO: CHANGE TO THE CORRECT ID
        currentUserID: "57a524b5-7637-497b-a629-ab035cfa33b5",
        period: period,
      }),
    );
  }, [dispatch, filterBy, period]);

  const top3RockStars = rockStars.slice(0, 3);
  const remainingRockStars = rockStars.slice(3);
  return (
    <StyledRockStarContainer>
      <StyledRow>
        <Space size={"small"}>
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
            value={filterBy}
          />

          <Select
            value={type}
            onChange={(value) => {
              setDate(null);
              setType(value);
            }}
            placeholder="Select period"
            options={[
              { value: "month", label: "Month" },
              { value: "quarter", label: "Quarter" },
              { value: "year", label: "Year" },
            ]}
            dropdownStyle={{
              maxHeight: 300,
              overflow: "auto",
              position: "fixed",
              border: "1px solid var(--primary-dark-color)",
            }}
          />
          {type && <PickerWithType type={type} />}
        </Space>
        {type || filterBy !== FilterBy.RECEIVES ? (
          <RockStarsClearButton resetFilters={resetFilters} />
        ) : null}
      </StyledRow>
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
          {top3RockStars && (
            <TopRockStars userRank={userRank} topRockStars={top3RockStars} />
          )}
          <RockStarList
            rockStars={remainingRockStars}
            userRank={userRank}
            isInTopTen={isInTopTen}
          />
        </LeaderBoardContainer>
      )}
    </StyledRockStarContainer>
  );
}
