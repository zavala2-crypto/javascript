let num = [3,1,6,9]
num.push(1)
num.sort()
console.log(num)
console.log('O vetor tem' +num.length+ 'posicoes')
console.log('O primeiro numero do vetor e ' +num[0])
let pos = num.indexOf (9)
if ( pos == -1) {
    console.log('O valor nao foi encontrado')
} else {
     console.log('O valor 9 esta na posicao' +pos)
}
