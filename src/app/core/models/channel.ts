import { User } from "./user";

export class Channel {
  id!: number;
  name!: string;
  user = new User();
}
