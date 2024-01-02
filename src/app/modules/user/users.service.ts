import ApiError from "../../../errors/ApiError";
import { User } from "./user.model";
import { IUser } from "./users.interface";
import  bcrypt  from 'bcrypt';

const createUser = async (user: IUser) => {
   
    const createdUser = await User.create(user);  
      if (!createdUser) {
          throw new ApiError(400, 'Failed to create');
        }
        return createdUser;
  }

  const loginUser = async (user: IUser) => {
   
    const Founduser = await User.findOne({email:user.email});
    if(!Founduser){
        throw new ApiError(400, 'User not found');
    }
    const isMatch = await bcrypt.compare(user.password, Founduser.password);
    if(!isMatch){
        throw new ApiError(400, 'Incorrect password');
    }
    return {
        email:Founduser.email,
        _id:Founduser._id
    
    };

}

export const userService = {
    createUser,
    loginUser
}