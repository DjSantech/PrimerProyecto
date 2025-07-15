import {Router} from 'express'

const router = Router ()

//Routing
router.get("/" , (req, res) => {
    res.send("Hola mundo en express")
});

/* Autenticacion y registro */
router.post('/auth/register', (req, res) =>
{
    console.log("Desde register")
    console.log(req.body)
})


export default router