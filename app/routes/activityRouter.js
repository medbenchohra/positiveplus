import express from 'express';

const activityRouter = express.Router();

import {addActivity,
        getActivity,
        updateActivity,
        deleteActivity} from "../controllers/adminController"



activityRouter.post('/',addAdmin);
activityRouter.get('/',getActivity);
activityRouter.put('/',updateActivity);
activityRouter.delete('/?idActivity',deleteActivity);

export {activityRouter};