(async () => {

  const socket = io()
  const pug = require('pug')

  // LOAD PRODUCTS
  const productTemplateResponse = await fetch('/templates/product.pug')
  const productTemplate = await productTemplateResponse.text()

  const productsResponse = await fetch('/api/productos')
  const products = await productsResponse.json()

  const $productsContainer = document.getElementById('productsContainer')

  const appendProduct = product => {
    let $productEl = document.createElement('tr')
    $productEl.innerHTML = pug.render(productTemplate, product)
    $productsContainer.appendChild($productEl)
  }

  products.forEach(appendProduct)


  // PRODUCTS FORM
  const $createProductForm = document.getElementById('createProductForm')

  $createProductForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = JSON.stringify(Object.fromEntries(formData.entries()))

    fetch('/api/productos', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      e.target.reset()
    })
  })

  // APPEND PRODUCT ON NEW PRODUCT EVENT
  socket.on('product:create', product => {
    appendProduct(product)
  })


  // LOAD MESSAGES
  const messageTemplateResponse = await fetch('/templates/message.pug')
  const messageTemplate = await messageTemplateResponse.text()

  const messagesResponse = await fetch('/api/mensajes')
  const messages = await messagesResponse.json()

  const $messagesContainer = document.getElementById('messagesContainer')

  const appendMessage = message => {
    let $messageEl = document.createElement('div')
    $messageEl.innerHTML = pug.render(messageTemplate, message)
    $messagesContainer.appendChild($messageEl)
  }

  messages.forEach(appendMessage)

  // MESSAGES FORM
  $sendMessageButton = document.getElementById('sendMessageButton')
  $messageInput = document.getElementById('messageInput')

  $sendMessageButton.addEventListener('click', async (e) => {
    fetch('/api/mensajes', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: $messageInput.value })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      $messageInput.value = ''
    })
  })
    
  // APPEND MESSAGE ON NEW MESSAGE EVENT
  socket.on('message:create', message => {
    appendMessage(message)
  })

})()