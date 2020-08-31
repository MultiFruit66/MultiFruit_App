import { Router, Response, Request } from 'express'
import bcrypt from 'bcrypt'

import { userModel } from '../models'

const router = Router()
const saltRounds = 10

router.post('/registration', async (request: Request, response: Response) => {
  const {
    email,
    password: _password,
    login,
    firstName,
    lastName,
  } = request.body
  
  const password = bcrypt.hashSync(_password, saltRounds)
  const user = new userModel({ email, password, login, firstName, lastName })
  
  try {
    await user.save()
    response.send({ ok: true })
  } catch (error) {
    response.send({
      ok: false,
      error,
      message: 'registration failed',
    })
  }
})

export default router
