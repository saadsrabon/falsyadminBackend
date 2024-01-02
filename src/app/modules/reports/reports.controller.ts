import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { reportService } from "./reports.service";

const createReport =catchAsync(async (req: Request, res: Response) => {
    const report = await reportService.createReport(req.body);
    res.status(201).json({
        success: true,
        data: report,
    });

})


const getReports = catchAsync(async (req: Request, res: Response) => {
    const reports = await reportService.getReports();
    res.status(201).json({
        success: true,
        data: reports,
    });

})

export const reportController = {
    createReport,
    getReports
}