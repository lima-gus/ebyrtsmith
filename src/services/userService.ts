import connection from '../models/connection';
import User from '../interfaces/user';
import UserModel from '../models/userModel';

class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<User> {
    return this.model.create(user);
  }
}

export default UserService;
