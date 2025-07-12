import {Router} from 'express'

const router = Router ()

//Routing
router.get("/" , (req, res) => {
    res.send("Hola mundo en express")
});


export default router