import { User } from "../models/user";


export interface ChannelI {
  id: number;
  name: string;
  user: User;
}
