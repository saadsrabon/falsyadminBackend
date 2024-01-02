import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { userService } from "./users.service";

const createUserController = catchAsync(async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body);
    res.status(201).json({
        success: true,
        data: user,
    });
});

const loginUserController = catchAsync(async (req: Request, res: Response) => {
    const user = await userService.loginUser(req.body);
    res.status(201).json({
        success: true,
        data: user,
    });
});

export const userController = {
    createUserController,
    loginUserController
}