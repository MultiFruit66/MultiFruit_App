import express, { Router } from 'express'
import path from 'path'

import auth from './auth'

const router = Router()

router.use(auth)

router.use(express.static('client/build'))
router.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'client', 'build', 'index.html'))
})

export default router
