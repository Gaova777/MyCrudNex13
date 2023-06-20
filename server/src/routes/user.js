import { Router } from "express";
import {createUser} from "../controllers/Users/createUser.js"
import {updateUser} from "../controllers/Users/updateUser.js"
import {loginUser} from "../controllers/Users/loginUser.js"
import {getAlluser} from "../controllers/Users/getAllUser.js"
import { getUserByName } from "../controllers/Users/getUserByname.js";
import { getUserById } from "../controllers/Users/getUserById.js";
import {LogicDelet} from '../controllers/Users/LogicDelete.js'
import { deleteUserById } from "../controllers/Users/DeleteUser.js";
import { 
        REGISTER, 
        LOGIN,
        UPDATEUSER, 
        ALLUSERS,
        SEARCH, 
        USERID, 
        ANNUL,
        DESTROY
} from "../paths.js";

const router = Router();

router.get(ALLUSERS,getAlluser)
router.get(SEARCH,getUserByName)
router.get(USERID,getUserById);
router.post(REGISTER, createUser)
router.post(LOGIN,loginUser)
router.put(ANNUL,LogicDelet)
router.put(UPDATEUSER, updateUser);
router.delete(DESTROY,deleteUserById);
export default router