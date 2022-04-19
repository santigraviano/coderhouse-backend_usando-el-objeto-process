const CartModel = require(`../models/cart/cart-${process.env.DB}.js`)
const ProductModel = require(`../models/product/product-${process.env.DB}.js`)
const MessageModel = require(`../models/message/message-${process.env.DB}.js`)
const UserModel = require(`../models/user/user-${process.env.DB}.js`)

module.exports = {
  Cart: new CartModel(),
  Product: new ProductModel(),
  Message: new MessageModel(),
  User: new UserModel()
}