import express from 'express';
import data from './data';
import config from './config'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter'


// dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true


}).then(()=>{
    console.log('connected to mongodb');
})
.catch((error)=> console.log(error.reason));

const app = express();

// console.log(userRouter.name);

app.use('/api/users', userRouter);

app.get("/api/products/:id", (req, res)=>{
    const productId = req.params.id;
    console.log("pro id : "+ productId);
    const product = data.products.find( x => x._id === productId);
    console.log("pro : "+ product);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({msg: "Product Not Found."});
    }
    
});

app.get("/api/products", (req, res)=>{
   
    res.send(data.products);
});

app.listen(5000, ()=>{console.log("server started at http://localhost:5000")});