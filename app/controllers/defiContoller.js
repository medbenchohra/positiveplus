import mongoose from 'mongoose';

import DefiSchma from "../models/Defi";

const Defi = mongoose.model('Defi',DefiSchma);


const getDefi = (req, res) => {
    
    if(err) res.send(err)
    resolveSoa.json(defi)
}

const addDefi = (req,res)=>{
    const newDefi = new Defi(req.body);
    newDefi.save((err, Defi) => {
        if(err) res.send(err)
        res.json(Defi);
    })
};


const updateDefi = (res,req) => {
    Defi.findOneAndUpdate(
        {_id: req.params.idDefi},
        req.body,
        (err, Defi) => {
            if(err) res.send(err)
            res.json(Defi)
        }
    )

};




const deleteDefi = (res,req) => {
    Defi.remove(
        {_id: req.params.idDefi},
        (err) => {
            if(err) req.send(err)
            res.json();
        }
    )
};

export { getDefi,updateDefi, addDefi, deleteDefi }