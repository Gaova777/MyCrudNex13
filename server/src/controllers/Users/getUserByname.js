import {User} from '../../models/user.js'

export const getUserByName = async (req,res,next)=>{
    const { name } = req.query;

  try {
    if (name) {
      const users = await User.findAll({
        where: { username: name }, // Filtrar por el nombre de usuario
        
      });

      console.log("serveeeer", users);
      res.send(users);
    } else {
      res.status(400).send('Missing query parameter: name');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};