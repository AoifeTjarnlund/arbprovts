import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

router.get('/posts', controller.getAllRoutes);
router.get('/posts/:id', controller.getRouteById);

export = router;