import express from 'express';

const DefiRouter = express.Router();

import {addDefi,
        getDefi,
        updateDefi,
        deleteDefi} from "../controllers/DefiController"


DefiRouter.post('/:idDefi',addDefi);
DefiRouter.get('/:idDefi',getDefi);
DefiRouter.put('/:idDefi',updateDefi);
DefiRouter.delete('/:idDefi',deleteDefi);

export {DefiRouter};