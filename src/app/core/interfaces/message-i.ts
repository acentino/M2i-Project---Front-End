import { User } from "../models/user";

export interface MessageI {
  id: number;
  content: string;
  dateMessage: string;
  hourMessage: string;
  channel: Channel;
  user: User;
}
