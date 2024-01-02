import { Schema, model } from "mongoose";
import { IUser } from "./users.interface";
import bcrypt from 'bcrypt';
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

// prehook to hash password
 userSchema.pre<IUser>('save',async function (next) {
      this.password = await bcrypt.hash(this.password, Number(10));
      next();
    })

export const User = model<IUser>('User', userSchema);