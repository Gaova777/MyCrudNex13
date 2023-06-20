import {User} from '../../models/user.js'

export const getUserByName = async (req,res,next)=>{
    const {name}= req.query;

    try {
        const someBody = await User.findAll({username:name});
        res.status(200).send(someBody)
    } catch (error) {
        res.status(404).send(error)
    }

}