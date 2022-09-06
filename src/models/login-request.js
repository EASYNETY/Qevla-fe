export default class LoginRequest {
  username: string;
  password: string;
  corporateCode: string;
  constructor(username: string, password: string, corporateCode: string) {
    this.username = username;
    this.password = password;
    this.corporateCode = corporateCode;
  }

  toString(): string {
    return `${this}`;
  }
}
