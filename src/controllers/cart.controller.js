const { Product} = require('../models')
const { Cart } = require('../models')

class CartController {

  async create(req, res) {
    try {
      const id = await Cart.save({ products: [] })
      res.json({ id })
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params
      await Cart.delete(id)
      res.sendStatus(200)
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params
      const cart = await Cart.getById(id)
      res.json(cart)
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }

  async addProduct(req, res) {
    try {
      const { id, productId } = req.params
      const { products } = await Cart.getById(id)

      const product = await Product.getById(productId)

      products.push(product)

      await Cart.update(id, { products })
      res.sendStatus(201)
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id, productId } = req.params
      const { products } = await Cart.getById(id)
      const index = products.findIndex(i => i.id == productId)
      
      if (index == -1) {
        res.json({ error: 'Product not found' })
      }

      products.splice(index, 1)

      await Cart.update(id, { products })
      res.sendStatus(200)
    }
    catch (e) {
      console.error(e.message, e.stack)
      res.json({ error: e.message })
    }
  }
}

module.exports = new CartController()