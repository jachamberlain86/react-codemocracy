import express from 'express';
const router = express.Router();

import { getAll, getOne, postEntry, putEntry, deleteEntry } from './controllers/controller.js';

router.get( '/api', getAll );
router.get( '/api/:id', getOne );
router.post( '/api', postEntry );
router.put( '/api/:id/:value', putEntry );
router.delete( '/api/:id', deleteEntry );

export default router;