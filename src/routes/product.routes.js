const { Router } = require("express")
const controller = require('../controllers/product.controller.js')
const onlyAdmin = require("../middlewares/onlyAdmin.js")

const router = new Router()

router.get('/', controller.index)
router.get('/:id', controller.show)
router.post('/', onlyAdmin, controller.create)
router.put('/:id', onlyAdmin, controller.update)
router.delete('/:id', onlyAdmin, controller.delete)

module.exports = router