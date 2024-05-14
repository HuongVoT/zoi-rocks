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
}

enum FilterBy {
  RECEIVES = "receives",
  SENDS = "sends",
}

export function RockStarsContainer() {
  const [type, setType] = useState<PickerType>(undefined);
  const [filterBy, setFilterBy] = useState<FilterBy>(FilterBy.RECEIVES);
  const [date, setDate] = useState<Dayjs | null>(null);

  const resetFilters = () => {
    setType(undefined);
    setFilterBy(FilterBy.RECEIVES);
    setDate(null);
  };

  const handleFilterPeriodChange: DatePickerProps["onChange"] = (
    date,
    //TODO: Remove the eslint-disable-next-line comment, and use this variable to send the date to the backend
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dateString,
  ) => {
    setDate(date);
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
            onChange={setType}
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
        <RockStarsClearButton resetFilters={resetFilters} />
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
          {top3RockStars && <TopRockStars topRockStars={top3RockStars} />}
          <RockStarList rockStars={remainingRockStars} />
        </LeaderBoardContainer>
      )}
    </StyledRockStarContainer>
  );
}
