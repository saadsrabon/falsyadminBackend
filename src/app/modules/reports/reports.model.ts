import { Schema, model } from "mongoose";
import { IReport } from "./reports.interface";

const reportsSchema = new Schema<IReport>({
    createdById: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
      
    },
    description:{
        type:String,
        required:true
    },
    institute:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    comments:[{
        type:Schema.Types.ObjectId,
        ref:'Comment'
    }],

    accusedName:{
        type:String,
        required:true
    }
}, {
    timestamps: true
})


export const Report = model<IReport>('Report', reportsSchema);