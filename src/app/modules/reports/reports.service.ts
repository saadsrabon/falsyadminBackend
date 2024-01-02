import { IReport } from "./reports.interface";
import { Report } from "./reports.model";

const createReport = async (report:IReport) => {
    const createdReport = await Report.create(report);
    return createdReport;
};

const getReports = async () => {
        // hide password when populating
        const reports = await Report.find({}).populate('createdById', '-password');


    return reports;
};

export const reportService = {
    createReport,
    getReports
}