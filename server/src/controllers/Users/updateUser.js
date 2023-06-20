import {User} from '../../models/user.js';


export const updateUser = async (req,res,next)=>{
    const {id}=req.params
    const {username, first_name, last_name, address, city,state} = req.body;

    try {
        const user = await User.findByPk(id)
        if(user){
            await user.update({username, first_name, last_name, address, city, state})

            res.status(200).send("User has been Updated")
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}