import express from 'express';
import SubCategoryController from './subCategory.controller';

const router = express.Router();

router.get('/', SubCategoryController.getCategoriesWithSubCategories);
router.get('/:catId', SubCategoryController.getSubCategoriesByCatId);

export const SubCategoryRoutes = router;
