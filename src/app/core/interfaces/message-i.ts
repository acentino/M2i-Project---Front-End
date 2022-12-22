import { User } from "../models/user";
import { Channel } from "../models/channel";

export interface MessageI {
  id: number;
  content: string;
  dateMessage: string;
  hourMessage: string;
  channel: Channel;
  user: User;
}
