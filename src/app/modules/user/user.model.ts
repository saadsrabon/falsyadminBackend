import { Schema, model } from "mongoose";
import { IUser } from "./users.interface";

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
}, {
    timestamps: true
})

export const User = model<IUser>('User', userSchema);