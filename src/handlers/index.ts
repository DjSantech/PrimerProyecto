import User from "../models/user" 
export const createAccount = async (req, res) =>
{   
    const user = new User(req.body)
    

    await user.save()
    
    res.send('Registo creado')
}