import { Router, type Request, type Response } from "express";

export const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json(`Default route`)
})


//  router GET