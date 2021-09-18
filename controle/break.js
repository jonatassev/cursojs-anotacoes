let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in array) {
    if (i == 5) {
        continue // continue interrompe o laço atual mais próximo (no caso o for) e pula para o próximo
    }

    console.log(`${i} = ${array[i]}`)
}

for (let i in array) {
    if (i == 5) {
        break // continue interrompe o laço atual mais próximo (no caso o for) e vai para a próxima instrução
    }

    console.log(`${i} = ${array[i]}`)
}

// externo = rótulo/label (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/label). Evitar usar.
externo: for (let i in array) { 
    for (let j in array) {
        if (array[i] == 2 && array[j] == 3) break externo
        console.log(`${array[i]},${array[j]}`)

    }
}