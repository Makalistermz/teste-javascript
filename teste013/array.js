let num = [1, 3, 7, 6, 0]
num[5] = (5) //add o numero 5 na casa 4
num.push(4) //add o numero 4 na ultima casa
num.sort() //add na orden crescente

for (let a = 0; a < num.length; a++) {
    console.log(`O numero ${num} esta na casa ${a}`)
}

console.log(num)
console.log(`O Array tem ${num.length} numeros`)
let lot = num.indexOf(7)

if (lot == -1){
    console.log('Numero não encontrado')
} else {
    console.log(`O numero 7 está na casa ${num.indexOf(7)}`)
}