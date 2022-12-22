import express from "express";
const app = express();
import dotEnv from 'dotenv';
dotEnv.config();
import morgan from "morgan";
import { connectDB } from "./db/connection.js";
import { productRouter } from "./routers/product.js";
// import { connectDB } from "./db/connection.js";


// as this is helpful in development
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());

//CONNECTING TO DATABASE
connectDB();


app.use('/api/v1/products', productRouter);

app.listen(process.env.PORT, ()=> {
    console.log(`SERVER IS WORKING ON http://localhost:${process.env.PORT}`)
})

// async is used here to connect db first and then start
// const start = async () => {
//     try{
//         const port = process.env.PORT || 8000;
//         await connectDB(process.env.MONGODB_URL);
//         app.listen(port, () => {
//             console.log(`Server is running at http://localhost:${port}`);
//         });
//     }catch(error){
//         console.log(error);
//     }
// }

// start();