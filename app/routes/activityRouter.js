import express from 'express';

const activityRouter = express.Router();

import {addActivity,
        getActivity,
        updateActivity,
        deleteActivity} from "../controllers/adminController"



activityRouter.post('/:idActivity',addActivity);
activityRouter.get('/:idActivity',getActivity);
activityRouter.put('/:idActivity',updateActivity);
activityRouter.delete('/:idActivity',deleteActivity);

export {activityRouter};