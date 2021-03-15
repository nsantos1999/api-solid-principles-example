import { Request, Response } from 'express'

export class UserController {
  static get (req: Request, res: Response) {
    return res.send('Listing all users!!')
  }
}
