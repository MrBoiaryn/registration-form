export class User {
  constructor(
    public id: number,
    public name: string | null,
    public companyName: string | null,
    public email: string | null,
    public password: string | null,
    public confirmPassword: string | null,
    public tel: number | null,
    public сheckboxes: string[] | null,
    public location: string | null,
    public comment: string | null
  ) {}
}
