const methodNotImplemented = (req, res, next) => {
  res.json({ error: -2, description: `Ruta ${ req.originalUrl } metodo ${ req.method } no implementada.` })
}

module.exports = methodNotImplemented