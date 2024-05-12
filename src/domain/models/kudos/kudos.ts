import { InvalidKudosPropsError } from "../../errors";
import { Description } from "./description";
import { Id } from "./id";

export interface KudosProps {
  id: string;
  sender: {
    id: string;
    name: string;
    image: string;
  };
  receiver: {
    id: string;
    name: string;
    image: string;
  };
  categories: string[];
  description: string;
  createdAt: Date;
}

export class Kudos {
  public get id() {
    return this.props.id;
  }

  public get sender() {
    return this.props.sender;
  }

  public get receiver() {
    return this.props.receiver;
  }

  public get categories() {
    return this.props.categories;
  }

  public get description() {
    return this.props.description;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public toJSON(): KudosProps {
    return JSON.parse(JSON.stringify(this.props));
  }

  constructor(private props: KudosProps) {
    if (!Description.isValid(props.description)) {
      throw new InvalidKudosPropsError("Invalid description");
    }

    if (!Id.isValid(props.id)) {
      throw new InvalidKudosPropsError("Invalid kudos ID");
    }
  }
}
