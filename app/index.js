import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import {adminRouter} from './routes/adminRouter'
import {articleRouter} from './routes/activityRouter'
import {userRouter} from './routes/userRouter'
import mongoose from 'mongoose'

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/TCdb',{
    useNewUrlParser: true
})

app.use('/admin',adminRouter)
app.use('/user',userRouter)
app.use('/activity',activityeRouter)


app.listen(3000);