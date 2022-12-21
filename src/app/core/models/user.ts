import { UserI } from "../interfaces/user-i";

export class User implements UserI{
  id!: number;
  userName!: string;
  email!: string;
}
