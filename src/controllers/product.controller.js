const { Product } = require('../models/index.js')
const { broadcast } = require('../services/io.js')

class ProductController {

  async index(req, res) {
    try {
      const products = await Product.getAll()
      res.json(products)
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params
      const product = await Product.getById(id)
      res.json(product)
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }

  async create(req, res) {
    try {
      const { body } = req
      const id = await Product.save(body)

      broadcast('product:create', body)

      res.json({ id })
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const { body } = req
      await Product.update(id, body)
      res.sendStatus(201)
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params
      await Product.delete(id)
      res.sendStatus(200)
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }
}

module.exports = new ProductController()