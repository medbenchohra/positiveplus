import express from 'express';

const adminRouter = express.Router();

import {addAdmin,
        getAdmin,
        updateAdmin,
        deleteAdmin} from "../controllers/adminController"



adminRouter.post('/',addAdmin);
adminRouter.get('/',getAdmin);
adminRouter.put('/',updateAdmin);
adminRouter.delete('/?idAdmin',deleteAdmin);

export {adminRouter};