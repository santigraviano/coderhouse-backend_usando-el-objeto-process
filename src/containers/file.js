const fs = require('fs').promises
const config = require('../config.js')

class FileContainer {
  constructor(filename) {
    this.path = `${config.file.path}/${filename}.json`
  }

  async getAll() {
    try {
      const items = await fs.readFile(this.path, 'utf8')
      return JSON.parse(items)
    }
    catch (e) {
      console.error(e.message, e.stack)
      return []
    }
  }

  async getById(id) {
    const items = await this.getAll()
    const item = items.find(i => i.id == id)

    if (!item) throw new Error('Item not found')

    return item
  }

  async save(data) {
    const items = await this.getAll()
    const id = items.length > 0 ? items[items.length - 1].id + 1 : 1
    const item = {
      id,
      ...data,
      timestamp: Date.now()
    }
    items.push(item)
    await fs.writeFile(this.path, JSON.stringify(items))
    return id
  }

  async update(id, data) {
    const items = await this.getAll()
    const index = items.findIndex(i => i.id == id)
    
    if (index == -1) throw new Error('Item not found')

    items[index] = { ...items[index], ...data }

    await fs.writeFile(this.path, JSON.stringify(items))
  }

  async delete(id) {
    const items = await this.getAll()
    const index = items.findIndex(i => i.id == id)

    if (index == -1) throw new Error('Item not found')

    items.splice(index, 1)

    await fs.writeFile(this.path, JSON.stringify(items))
  }

  async deleteAll() {
    await fs.writeFile(this.path, JSON.stringify([]))
  }
}

module.exports = FileContainer