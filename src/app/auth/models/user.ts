import {Token} from "./token";

export class User {
  username: string;
  token: Token;

  constructor(username: string, token: Token) {
    this.username = username;
    this.token = token;
  }
}
