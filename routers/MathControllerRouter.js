import express from "express"
const router = express.Router()
import {DoMath} from '../controllers/MathController.js'

router.post("/calc",DoMath)

export default router