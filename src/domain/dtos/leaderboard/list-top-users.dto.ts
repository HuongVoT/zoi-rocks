import type { Leaderboard } from "../../models";

export interface ListTopUsersDTO {
  sortBy: "sends" | "receives";
  currentUserID: string;
  period?: string | string[];
}

export interface ListTopUsersOutputDTO {
  topTenUsers: Leaderboard[];
  currentUser: Leaderboard | undefined;
  currentUserRank: {
    isInTopTen: boolean;
    userRank: number;
  };
}
