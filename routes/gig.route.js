import express from 'express';
import { createGig } from '../controller/gig.controller.js';
import { deleteGig } from '../controller/gig.controller.js';
import { getGig } from '../controller/gig.controller.js';
import { getGigs } from '../controller/gig.controller.js';
import { verifyToken } from '../middleware/jwt.js';

const router=express.Router();

router.post("/",verifyToken,createGig)
router.delete("/:id",verifyToken,deleteGig)
router.get("/single/:id",verifyToken,getGig)
router.get("/",verifyToken,getGigs)


export default router;