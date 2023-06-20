import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { sequelize } from './db/db.js';
import userRoutes from './routes/user.js'


const server = express()


server.use(cors());
server.use(morgan('dev'));
server.use(bodyParser.urlencoded({extended:false}));
server.use(express.json());
// server.use(cookieParser());

server.use('/api/user',userRoutes);


server.get('/', (req,res)=>{
    res.json({
        state: true,
        message:"working"
    })
});

(async function seqSync(){
    try {
        sequelize
            .sync({force:false})
            .then(()=>{
                console.log("Pg sync has been established successully")
            })
    } catch (error) {
        console.log('Unable to sync to the DB: ', error);
    }
})();


export default server;