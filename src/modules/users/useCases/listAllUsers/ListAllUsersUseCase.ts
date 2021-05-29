import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userAlreadyExists = this.usersRepository.findById(user_id);

    if (!userAlreadyExists) {
      throw new Error("User Admin not already exists!");
    }
    if (!userAlreadyExists.admin) {
      throw new Error("Non admin user not get list of all users!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
