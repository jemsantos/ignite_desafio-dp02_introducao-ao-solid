import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userAlreadyExists = this.usersRepository.findById(user_id);

    if (!userAlreadyExists) {
      throw new Error("User not already exists!");
    }

    return this.usersRepository.turnAdmin(userAlreadyExists);
  }
}

export { TurnUserAdminUseCase };

// parei neste: Should not be able to turn a non existing user as admin......
