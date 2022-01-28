import express from "express";
import {getUsers, login, Logout, Register} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getAllAlat, createAlat, getAlatById, updateAlat, deleteAlat } from "../controllers/daftaralat.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users',Register);
router.post('/login',login);
router.get('/token',refreshToken);
router.delete('/logout',Logout);

router.get('/', getAllAlat );
router.get('/:id', getAlatById );
router.post('/', createAlat);
router.patch('/:id', updateAlat );
router.delete('/:id', deleteAlat );




export default router;