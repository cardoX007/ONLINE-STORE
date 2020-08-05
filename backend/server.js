import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req, res)=>{
    console.log("can get");
    res.send(data.products);
});

app.listen(5000, ()=>{console.log("server started at http://localhost:5000")});