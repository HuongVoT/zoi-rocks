export interface LeaderboardProps {
  id: string;
  name: string;
  image: string | null;
  totalSends: number;
  totalReceives: number;
}

export class Leaderboard {
  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }

  public get image() {
    return this.props.image;
  }

  public get totalSends() {
    return this.props.totalSends;
  }

  public get totalReceives() {
    return this.props.totalReceives;
  }

  public toJSON(): LeaderboardProps {
    return JSON.parse(JSON.stringify(this.props));
  }

  constructor(private readonly props: LeaderboardProps) {
    if (!Leaderboard.isValid(props)) {
      throw new Error("Invalid leaderboard");
    }
  }

  private static isValid(props: LeaderboardProps): boolean {
    return props.id !== "" && props.name !== "";
  }
}
