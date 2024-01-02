import { Model, Types } from "mongoose";

export type IReport = {
    'createdById': Types.ObjectId,
    'title': string,
    'description': string,
    'institute': string,
    'location': string,
    'comments':[object],
    'creatorName': string,
    'accusedName': string,
};    

export type ReportModel = Model<IReport, Record<string, unknown>>;