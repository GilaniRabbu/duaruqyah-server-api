import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { DuaService } from './dua.service';

const getAllDuas = catchAsync(async (_req: Request, res: Response) => {
  const result = DuaService.getAllDuas();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Duas fetched successfully',
    data: result,
  });
});

const getDuasByCategory = catchAsync(async (req: Request, res: Response) => {
  const catId = Number(req.params.catId);
  const result = DuaService.getDuasByCategory(catId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Duas for category ${catId} fetched successfully`,
    data: result,
  });
});

const getDuasBySubCategory = catchAsync(async (req: Request, res: Response) => {
  const subcatId = Number(req.params.subcatId);
  const result = DuaService.getDuasBySubCategory(subcatId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Duas for sub-category ${subcatId} fetched successfully`,
    data: result,
  });
});

const getDuaById = catchAsync(async (req: Request, res: Response) => {
  const duaId = req.params.id;
  const result = DuaService.getDuaById(duaId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Dua ${duaId} fetched successfully`,
    data: result,
  });
});

export default {
  getAllDuas,
  getDuasByCategory,
  getDuasBySubCategory,
  getDuaById,
};
