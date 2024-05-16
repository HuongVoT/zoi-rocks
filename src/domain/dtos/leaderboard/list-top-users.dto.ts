import type { LeaderboardUser } from "../../models";

export interface ListTopUsersDTO {
  sortBy: "sends" | "receives";
  currentUserID: string;
  period?: string | string[];
}

export interface ListTopUsersOutputDTO {
  topTenUsers: LeaderboardUser[];
  currentUser: LeaderboardUser | undefined;
  currentUserRank: {
    isInTopTen: boolean;
    userRank: number;
  };
}
