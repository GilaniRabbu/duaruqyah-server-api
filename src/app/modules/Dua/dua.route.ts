import express from 'express';
import DuaController from './dua.controller';

const router = express.Router();

router.get('/', DuaController.getAllDuas);
router.get('/category/:catId', DuaController.getDuasByCategory);
router.get('/subcategory/:subcatId', DuaController.getDuasBySubCategory);
router.get('/:id', DuaController.getDuaById);

export const DuaRoutes = router;
