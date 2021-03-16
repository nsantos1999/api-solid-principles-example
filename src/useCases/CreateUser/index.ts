import { MailtrapMailProvider } from "providers/implementations/MailtrapMailProvider";
import { PostgresUserRepository } from "repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailtrapMailProvider();
const postegresUsersRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(
  postegresUsersRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
