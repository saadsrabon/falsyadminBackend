import ApiError from "../../../errors/ApiError";
import { User } from "./user.model";
import { IUser } from "./users.interface";

const createUser = async (user: IUser) => {
   
    const createdUser = await User.create(user);  
      if (!createdUser) {
          throw new ApiError(400, 'Failed to create');
        }
        return createdUser;
  }

export const userService = {
    createUser
}