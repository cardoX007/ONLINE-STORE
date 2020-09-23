import express from 'express';
import User from '../models/userModels';

const userRouter = express.Router();

userRouter.get('/createadmin', async (req, res) => {
    console.log("routers");  
    try {
        const user = new User({
            name: 'Richard',
            email: 'richard.pepone@gmail.com',
            password: '1234',
            isAdmin: true,

        });
    
        const newUser = await user.save();
        res.send (newUser);
        
    } catch (error) {
        console.log(error); 
        res.status(500).send ({ message : error.message});
    }

});
// console.log(router);  
export default userRouter;