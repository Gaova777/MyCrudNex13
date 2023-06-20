import {User} from '../../models/user.js'

export const getAlluser = async (req,res,next)=>{

    try {
        
        const users = await User.findAll();

        res.status(200).send(users)

    } catch (error) {
        res.status(400).send(error);
    }
    

}