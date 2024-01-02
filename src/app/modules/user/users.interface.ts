// user interface

import { Model } from "mongoose";

 export type IUser = {
    email: string,
    password: string,
    creatorName: string,
    profession: string,
}

export type UserModel = Model<IUser, Record<string, unknown>>;