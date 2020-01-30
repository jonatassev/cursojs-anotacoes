//Destructuring em função

function rand([min = 1, max = 6]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * ( max - min) + min
    return Math.floor(valor)
}

console.log(rand([7]))