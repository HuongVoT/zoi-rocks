import { InvalidUserPropsError } from "../../errors";
import { Email } from "./email";
export interface UserProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string | null;
}

export class User {
  public get id() {
    return this.props.id;
  }

  public get firstName() {
    return this.props.firstName;
  }

  public get lastName() {
    return this.props.lastName;
  }

  public get email() {
    return this.props.email;
  }

  public get image() {
    return this.props.image;
  }

  public toJSON(): UserProps {
    return JSON.parse(JSON.stringify(this.props));
  }

  constructor(private readonly props: UserProps) {
    if (!Email.isValid(props.email)) {
      throw new InvalidUserPropsError("Invalid email");
    }
  }
}
