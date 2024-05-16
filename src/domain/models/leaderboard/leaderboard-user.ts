export interface LeaderboardUserProps {
  id: string;
  name: string;
  image: string | null;
  totalSends: number;
  totalReceives: number;
}

export class LeaderboardUser {
  constructor(private props: LeaderboardUserProps) {}

  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }

  public get totalSends() {
    return this.props.totalSends;
  }

  public get totalReceives() {
    return this.props.totalReceives;
  }

  public get image() {
    return this.props.image;
  }

  public toJSON(): LeaderboardUserProps {
    return JSON.parse(JSON.stringify(this.props));
  }
}
