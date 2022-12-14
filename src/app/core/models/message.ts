import { MessageI } from "../interfaces/message-i";
import { Channel } from "./channel";
import { User } from "./user";

export class Message implements MessageI{
  id!: number;
  content!: string;
  dateMessage!: string;
  hourMessage!: string;
  channel = new Channel();
  user = new User();
}
