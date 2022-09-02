import express from 'express';
import { passwordCheck } from '../middleware/passwordCheck.js';
import { getAllUsers, getUser, updateUser } from '../controllers/userControllers.js';

const router = express.Router();


router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', passwordCheck, updateUser);

export default router;


/*
    "livesIn":"Paris",
    "worksAt":"Comptable",
    "relationship":"celibataire",
    "country":"France"
    
    */