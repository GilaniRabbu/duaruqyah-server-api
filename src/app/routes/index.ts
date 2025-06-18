import express from 'express';
import { CategoryRoutes } from '../modules/Category/category.route';
import { SubCategoryRoutes } from '../modules/SubCategory/subCategory.route';
import { DuaRoutes } from '../modules/Dua/dua.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/sub-categories',
    route: SubCategoryRoutes,
  },
  {
    path: '/duas',
    route: DuaRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
