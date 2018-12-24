import express from 'express';
import jsonwebtoken from 'jsonwebtoken'
const app = express();
import bodyParser from 'body-parser';
import {userRouter} from './routes/userRouter'
import mongoose from 'mongoose'

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/PPdb',{
    useNewUrlParser: true
})

app.use('/user',userRouter)


app.listen(3000);