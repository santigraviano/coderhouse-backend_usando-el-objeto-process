const quantity = +process.argv[2]
const min = 1
const max = 1000

let randoms = {}

for (let i = 0; i < quantity; i++) {
  const number = Math.floor(Math.random() * (max - min) + min)

  if (number in randoms) {
    randoms[number] += 1
  }
  else {
    randoms[number] = 1
  }
}

process.send(randoms)