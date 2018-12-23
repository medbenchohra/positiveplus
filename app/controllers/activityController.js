import mongoose from 'mongoose';

import {ActivitySchma} from "../models/Activity";

const Activity = mongoose.model('Activity',ActivitySchma);

const getActivity = (req, res) => {
    
    if(err) res.send(err)
    res.json(acrivities)
}

const addActiviy = (req,res)=>{
    const newActivity = new Activity(req.body);
    newActivity.save((err, activity) => {
        if(err) res.send(err)
        res.json(activity);
    })
};


const updateActivity = (res,req) => {
    Activity.findOneAndUpdate(
        {_id: req.params.idActivity},
        req.body,
        (err, activity) => {
            if(err) res.send(err)
            res.json(activity)
        }
    )

};

const deleteActivity = (res,req) => {
    Activity.remove(
        {_id: req.params.idActivity},
        (err) => {
            if(err) req.send(err)
            res.json();
        }
    )
};

export { getActivity,updateActivity, addActivity, deleteActivity }