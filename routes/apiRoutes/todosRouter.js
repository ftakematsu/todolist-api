import express from 'express';
import { Create, Read, Update, Delete } from '../../app/controllers/todoCtrl';

const router = express.Router();

router.post('/', Create);

router.route('/:id')
    .get(Read)
    .put(Update)
    .delete(Delete);

export default router;