const { Router } = require('express')
const controller = require('../controllers/main.controller.js')
const authMiddleware = require('../middlewares/auth.js')

const router = new Router()

router.get('/', authMiddleware, controller.index)
router.get('/info', controller.info)

module.exports = router