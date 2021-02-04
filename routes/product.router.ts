import { Router } from "express";
const router = Router();
import * as ProductController from '../controller/product.controller';

router.get('/', ProductController.index);
router.post('/', ProductController.create);
router.get('/:id', ProductController.find);

export default router;