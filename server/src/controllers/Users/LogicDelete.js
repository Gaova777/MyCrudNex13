import { User } from "../../models/user.js";

export const LogicDelet = async (req, res, next)=>{
    const {id}=req.params

    try {
        const user = await User.findByPk(id);
        if(user.anull==0){
            await user.update({anull:1})
            res.status(200).send("User has been Anulled")

        }else {
            await user.update({anull:0})
            res.status(200).send("User has been Actived")

        }

    } catch (error) {
        res.status(400).send(error.message)
        
    }
}