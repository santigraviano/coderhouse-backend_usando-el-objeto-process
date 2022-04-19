(async () => {

  const pug = require('pug')

  const productsResponse = await fetch('/api/productos-test')
  const products = await productsResponse.json()

  const templateResponse = await fetch('/templates/product.pug')
  const template = await templateResponse.text()

  const $productsTableBody = document.getElementById('productsTableBody')

  products.forEach(product => {
    $productElement = document.createElement('tr')
    $productElement.innerHTML = pug.render(template, product)
    $productsTableBody.appendChild($productElement)
  })

})()
