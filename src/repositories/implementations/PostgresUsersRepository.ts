import { User } from "@entities/User";
import { IUsersRepository } from "repositories/IUsersRepository";

export class PostgresUserRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
