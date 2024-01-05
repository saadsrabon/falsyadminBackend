
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

const addUpvote = async (userId: any, reportId: any) => 
{
    try {
      const isExist = await Report.findOne({ _id: reportId, 'upvotes.userId': userId });
  
      if (isExist) {
        const updatedReport = await Report.findOneAndUpdate(
          { _id: reportId, 'upvotes.userId': userId },
          { $inc: { 'upvotes.$.vote': -1 } },
          { new: true }
        );
        return updatedReport;
      } else {
        const report = await Report.findByIdAndUpdate(
          reportId,
          { $push: { upvotes: { vote: 1, userId } } },
          { new: true }
        );
        return report;
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
    };

export const reportService = {
    createReport,
    getReports,
    addUpvote
}

