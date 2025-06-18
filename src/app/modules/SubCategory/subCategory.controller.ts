import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { SubCategoryService } from './subCategory.service';

const getAllSubCategories = catchAsync(async (_req: Request, res: Response) => {
  const result = SubCategoryService.getAllSubCategories();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sub-categories fetched successfully',
    data: result,
  });
});

const getSubCategoriesByCatId = catchAsync(
  async (req: Request, res: Response) => {
    const catId = Number(req.params.catId);
    const result = SubCategoryService.getSubCategoriesByCatId(catId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `Sub-categories for category ${catId} fetched successfully`,
      data: result,
    });
  }
);

const getCategoriesWithSubCategories = catchAsync(
  async (_req: Request, res: Response) => {
    const result = SubCategoryService.getAllCategoriesWithSubCategories();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Categories with sub-categories fetched successfully',
      data: result,
    });
  }
);

export default {
  getAllSubCategories,
  getSubCategoriesByCatId,
  getCategoriesWithSubCategories,
};
