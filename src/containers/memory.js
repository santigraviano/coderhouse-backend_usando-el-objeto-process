class MemoryContainer {
  constructor() {
    this.items = []
  }

  getAll() {
    return this.items
  }

  getById(id) {
    const item = this.items.find(i => i.id == id)
    if (!item) throw new Error('Item not found')
    return item
  }

  save(data) {
    const id = this.items.length > 0 ? this.items[this.items.length - 1].id + 1 : 1
    const item = {
      id,
      ...data,
      timestamp: Date.now()
    }
    this.items.push(item)
    return id
  }

  update(id, data) {
    const index = this.items.findIndex(i => i.id == id)
    if (index == -1) throw new Error('Item not found')
    this.items[index] = {
      ...this.items[index],
      ...data
    }
  }

  delete(id) {
    const index = this.items.findIndex(i => i.id == id)
    if (index == -1) throw new Error('Item not found')
    this.items.splice(index, 1)
  }

  deleteAll() {
    this.items = []
  }
}

module.exports = MemoryContainer