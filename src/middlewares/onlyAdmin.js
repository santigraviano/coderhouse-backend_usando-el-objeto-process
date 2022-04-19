const isAdmin = process.env.IS_ADMIN == 'true' ? true : false

const onlyAdmin = (req, res, next) => {
  if (!isAdmin)
    res.json({ error: -1, description: `Ruta ${ req.originalUrl } método ${ req.method } no autorizada` })
  else next()
}

module.exports = onlyAdmin