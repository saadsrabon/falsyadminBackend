import { Model, Types } from "mongoose";

export type IReport = {
    createdById: Types.ObjectId,
    title: string,
    description: string,
    institute: string,
    location: string,
    comments:[object],
    upvotes: [{
        vote: number,
        userId: Types.ObjectId
    }],
    downvotes:[ {
        vote: number,
        userId: Types.ObjectId
    }],
    accusedName: string,
};    

export type ReportModel = Model<IReport, Record<string, unknown>>;