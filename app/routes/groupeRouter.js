import express from 'express';

const GroupeRouter = express.Router();

import {addGroupe,
        getGroupe,
        updateGroupe,
        deleteGroupe} from "../controllers/groupeController"


GroupeRouter.post('/:idGroupe',addGroupe);
GroupeRouter.get('/:idGroupe',getGroupe);
GroupeRouter.put('/:idGroupe',updateAdminGroupe);
GroupeRouter.delete('/:idGroupe',deleteGroupe);

export {GroupeRouter};